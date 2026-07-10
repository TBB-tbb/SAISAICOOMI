<?php
declare(strict_types=1);

mb_language('Japanese');
mb_internal_encoding('UTF-8');
date_default_timezone_set('Asia/Tokyo');

const SITE_NAME = 'SAISAICOOMI JAPAN';
const ADMIN_EMAIL = 'yamatsuba0325@gmail.com';
const LOG_LEVEL = 'debug'; // debug, info, error, none

$logDir = __DIR__ . '/logs';
$logFile = $logDir . '/contact-form.log';

set_error_handler(function (int $severity, string $message, string $file, int $line): bool {
    writeLog('PHP_ERROR', [
        'error' => $message,
        'file' => $file,
        'line' => (string) $line,
        'severity' => (string) $severity,
    ], 'error');
    return false;
});

set_exception_handler(function (Throwable $exception): void {
    writeLog('PHP_EXCEPTION', [
        'error' => $exception->getMessage(),
        'file' => $exception->getFile(),
        'line' => (string) $exception->getLine(),
    ], 'error');
    redirectWithLog('/contact/?error=send', 'EXCEPTION_REDIRECT');
});

function logEnabled(string $level): bool
{
    $levels = ['debug' => 0, 'info' => 1, 'error' => 2, 'none' => 99];
    $current = $levels[LOG_LEVEL] ?? 0;
    $target = $levels[$level] ?? 0;
    return $target >= $current && LOG_LEVEL !== 'none';
}

function baseLogContext(): array
{
    return [
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
        'name' => sanitizeLogValue($_POST['name'] ?? ''),
        'email' => sanitizeLogValue($_POST['email'] ?? ''),
        'tel' => sanitizeLogValue($_POST['tel'] ?? ''),
        'message_length' => isset($_POST['message']) ? (string) mb_strlen((string) $_POST['message'], 'UTF-8') : '0',
    ];
}

function sanitizeLogValue(mixed $value): string
{
    $text = trim((string) $value);
    $text = preg_replace('/[\r\n\t]+/u', ' ', $text) ?? '';
    return mb_substr($text, 0, 160, 'UTF-8');
}

function writeLog(string $event, array $context = [], string $level = 'debug'): void
{
    if (!logEnabled($level)) {
        return;
    }

    global $logDir, $logFile;

    try {
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }

        $data = array_merge(baseLogContext(), $context);
        $pairs = [];
        foreach ($data as $key => $value) {
            $pairs[] = $key . '=' . str_replace(["\r", "\n"], ' ', (string) $value);
        }

        $line = sprintf(
            "[%s] %s %s\n",
            date('Y-m-d H:i:s'),
            $event,
            implode(' ', $pairs)
        );

        @file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
    } catch (Throwable $exception) {
        // Logging must never stop form processing.
    }
}

function redirectWithLog(string $to, string $event = 'FINAL_REDIRECT'): never
{
    writeLog($event, ['redirect_to' => $to], 'info');
    header('Location: ' . $to, true, 302);
    exit;
}

function postValue(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirectWithLog('/contact/', 'NON_POST_REDIRECT');
}

writeLog('POST_RECEIVED', [], 'info');

$website = postValue('website');
if ($website !== '') {
    writeLog('HONEYPOT_DETECTED', ['error' => 'website field is not empty'], 'info');
    redirectWithLog('/contact/', 'HONEYPOT_REDIRECT');
}

$name = postValue('name');
$kana = postValue('kana');
$company = postValue('company');
$email = postValue('email');
$tel = postValue('tel');
$message = postValue('message');

$requiredErrors = [];
foreach (['name' => $name, 'email' => $email, 'tel' => $tel, 'message' => $message] as $field => $value) {
    if ($value === '') {
        $requiredErrors[] = $field;
    }
}

if ($requiredErrors !== []) {
    writeLog('VALIDATION_REQUIRED_ERROR', [
        'error' => 'required fields missing',
        'fields' => implode(',', $requiredErrors),
    ], 'info');
    redirectWithLog('/contact/?error=required', 'VALIDATION_REDIRECT');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    writeLog('VALIDATION_EMAIL_ERROR', ['error' => 'invalid email format'], 'info');
    redirectWithLog('/contact/?error=email', 'VALIDATION_REDIRECT');
}

$fromHeader = 'From: ' . mb_encode_mimeheader(SITE_NAME) . ' <' . ADMIN_EMAIL . '>';
$replyToHeader = 'Reply-To: ' . $email;
$headers = implode("\r\n", [
    $fromHeader,
    $replyToHeader,
    'Content-Type: text/plain; charset=UTF-8',
]);

$adminSubject = '【' . SITE_NAME . '】お問い合わせがありました';
$adminBody = <<<EOT
SAISAICOOMI JAPAN 公式サイトよりお問い合わせがありました。

お名前：
{$name}

お名前（フリガナ）：
{$kana}

メールアドレス：
{$email}

お電話番号：
{$tel}

お問い合わせ内容：
{$message}
EOT;

$userSubject = 'お問い合わせありがとうございます';
$userBody = <<<EOT
{$name}様

この度はお問い合わせいただき、誠にありがとうございます。
Thank you for your inquiry.

以下の内容にてお問い合わせを承りました。

【お名前】
{$name}

【会社名】
{$company}

【メールアドレス】
{$email}

【お問い合わせ内容】
{$message}

内容を確認の上、担当よりご連絡致します。
We will get back to you from the person in charge.

なお、お問い合わせ内容によっては、ご返信までにお時間をいただく場合がございますので、あらかじめご了承下さい。

──────────────────
SASAICOOMI JAPAN 株式会社
メール：info@saisaicoomi.jp
ホームページ：http://saisaicoomi.jp/
──────────────────
EOT;
$adminSent = mb_send_mail(ADMIN_EMAIL, $adminSubject, $adminBody, $headers);
writeLog('ADMIN_MAIL_RESULT', [
    'success' => $adminSent ? 'true' : 'false',
], $adminSent ? 'info' : 'error');

$userHeaders = implode("\r\n", [
    $fromHeader,
    'Content-Type: text/plain; charset=UTF-8',
]);
$userSent = mb_send_mail($email, $userSubject, $userBody, $userHeaders);
writeLog('USER_MAIL_RESULT', [
    'success' => $userSent ? 'true' : 'false',
], $userSent ? 'info' : 'error');

if ($adminSent && $userSent) {
    redirectWithLog('/thanks/', 'FINAL_REDIRECT');
}

redirectWithLog('/contact/?error=send', 'FINAL_REDIRECT');

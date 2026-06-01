import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "送信完了",
};

export default function ThanksPage() {
  return (
    <>
      <PageTitle title="送信完了" label="THANKS" />
      <section className="content-shell pb-20">
        <div className="rounded-3xl border border-brand-navy/10 bg-white px-8 py-14 text-center shadow-soft">
          <p className="text-lg font-bold leading-8 text-brand-navy">
            お問い合わせを受け付けました。
            <br />
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-brand-navy px-8 py-3 text-sm font-bold tracking-[0.14em] text-white transition hover:bg-brand-wine"
          >
            HOMEへ戻る
          </Link>
        </div>
      </section>
    </>
  );
}

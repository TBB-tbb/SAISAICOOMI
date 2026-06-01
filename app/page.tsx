import Link from "next/link";

const homeLinks = [
  {
    href: "/information/",
    title: "お知らせ",
    label: "INFORMATION",
    description: "新着情報やご案内を掲載します。",
    color: "text-brand-blush",
    icon: "bell",
  },
  {
    href: "/products/",
    title: "取扱商品",
    label: "PRODUCTS",
    description: "こだわりの食品を紹介しています。",
    color: "text-brand-green",
    icon: "basket",
  },
  {
    href: "/contact/",
    title: "お問い合わせ",
    label: "CONTACT",
    description: "商品やお取引のご相談はこちら。",
    color: "text-brand-wine",
    icon: "mail",
  },
];

function GuideIcon({ type, className }: { type: string; className: string }) {
  if (type === "bell") {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path
          d="M18 39h12M15 35h18M17 35V21a7 7 0 0 1 14 0v14M24 10v4M14 25c-2 3-3 6-3 10h26c0-4-1-7-3-10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      </svg>
    );
  }

  if (type === "basket") {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path
          d="M13 19h22l-3 18H16l-3-18ZM19 19l5-9 5 9M19 25v7M24 25v7M29 25v7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M10 15h28v20H10V15ZM11 16l13 11 13-11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="relative h-[620px] overflow-hidden bg-white md:h-[650px] lg:h-[560px]">
          <img
            src="/images/HERO.png"
            alt="色とりどりの食材"
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-[62%_50%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/94 via-[39%] to-white/0"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-[34%] hidden w-[24%] bg-gradient-to-r from-white/85 to-transparent blur-xl md:block"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent"
            aria-hidden="true"
          />

          <div className="content-shell relative flex h-full items-center pt-12 md:pt-10">
            <div className="max-w-[620px] pb-10">
              <div className="mb-5 flex items-center gap-5">
                <span className="flex gap-3" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-brand-blush" />
                  <span className="h-3 w-3 rounded-full bg-brand-wine" />
                  <span className="h-3 w-3 rounded-full bg-brand-green" />
                  <span className="h-3 w-3 rounded-full bg-[#d8bd83]" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                </span>
                <span className="text-sm font-bold tracking-[0.28em] text-slate-700">
                  FOOD IMPORT & SELECT
                </span>
              </div>
              <h1 className="text-[30px] font-medium leading-[1.42] tracking-[0.12em] text-brand-navy">
                <span className="block">世界には、</span>
                <span className="block">まだ知られていない</span>
                <span className="block">美味しいものが</span>
                <span className="block">たくさんあります。</span>
              </h1>
              <p className="mt-8 max-w-[600px] text-[15px] font-semibold leading-8 tracking-[0.08em] text-slate-600">
                私たちは、素材や製法、生産者の想いにこだわった食品を厳選し、
                「これは美味しい！」と心から感じた商品をご紹介しています。
              </p>
              <p className="mt-5 text-[15px] font-semibold leading-8 tracking-[0.08em] text-slate-600">
                毎日の食卓を少し豊かに、少し楽しく。
                <br />
                ぜひ、あなたのお気に入りを見つけて下さい。
              </p>
              <div className="mt-8 flex flex-col gap-5 pb-2 sm:flex-row">
                <Link
                  href="/products/"
                  className="inline-flex min-w-52 items-center justify-center gap-5 rounded-full bg-brand-navy px-8 py-4 text-sm font-bold tracking-[0.18em] text-white shadow-[0_18px_36px_rgba(7,19,107,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-wine"
                >
                  取扱商品を見る
                  <span className="text-xl leading-none">›</span>
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex min-w-52 items-center justify-center gap-5 rounded-full border border-brand-navy/45 bg-white px-8 py-4 text-sm font-bold tracking-[0.18em] text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:border-brand-wine hover:text-brand-wine"
                >
                  お問い合わせ
                  <span className="text-xl leading-none">›</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 right-[max(32px,calc((100vw-1120px)/2))] hidden w-[340px] bg-white px-10 py-8 shadow-[0_18px_48px_rgba(7,19,107,0.12)] md:block">
            <div className="mb-6 text-[#d0a94d]" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="h-10 w-10">
                <path
                  d="M24 38V16M24 25c-8 0-13-5-13-13 8 0 13 5 13 13ZM24 30c8 0 13-5 13-13-8 0-13 5-13 13Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="text-base font-bold leading-7 tracking-[0.14em] text-slate-600">
              Selected Foods
              <br />
              for a Better Table
            </p>
            <div className="my-5 h-px w-16 bg-[#d0a94d]/45" />
            <p className="text-sm font-semibold tracking-[0.12em] text-slate-600">
              自然の恵みを、毎日の食卓へ。
            </p>
          </div>
        </div>

        <div className="border-y border-brand-navy/10 bg-white">
          <div className="content-shell grid sm:grid-cols-3">
            {homeLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group grid grid-cols-[58px_1fr_28px] items-center gap-5 border-b border-brand-navy/10 py-5 transition hover:bg-brand-cream/55 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0"
              >
                <GuideIcon
                  type={item.icon}
                  className={`h-11 w-11 ${item.color}`}
                />
                <span>
                  <span className="block text-xs font-bold tracking-[0.2em] text-slate-600">
                    {item.label}
                  </span>
                  <span className="mt-2 block text-2xl font-semibold tracking-[0.08em] text-brand-navy">
                    {item.title}
                  </span>
                  <span className="mt-3 block text-sm font-medium leading-6 text-slate-500">
                    {item.description}
                  </span>
                </span>
                <span className="text-4xl font-light text-brand-navy transition group-hover:translate-x-1 group-hover:text-brand-wine">
                  ›
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

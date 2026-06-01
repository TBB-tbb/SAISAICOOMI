import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "お問合せ",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="お問合せ"
        label="CONTACT"
        lead="商品やお取引に関するお問い合わせは、以下のフォームよりお送りください。"
      />
      <section className="content-shell pb-20">
        <form
          action="/send.php"
          method="post"
          className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-soft md:p-8"
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-bold text-brand-navy">
                お名前 <span className="text-brand-wine">必須</span>
              </span>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-2xl border border-brand-navy/15 bg-brand-cream/50 px-4 py-3 outline-none transition focus:border-brand-navy focus:bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-bold text-brand-navy">お名前（フリガナ）</span>
              <input
                name="kana"
                type="text"
                className="w-full rounded-2xl border border-brand-navy/15 bg-brand-cream/50 px-4 py-3 outline-none transition focus:border-brand-navy focus:bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-bold text-brand-navy">
                メールアドレス <span className="text-brand-wine">必須</span>
              </span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-brand-navy/15 bg-brand-cream/50 px-4 py-3 outline-none transition focus:border-brand-navy focus:bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-bold text-brand-navy">
                お電話番号 <span className="text-brand-wine">必須</span>
              </span>
              <input
                name="tel"
                type="tel"
                required
                className="w-full rounded-2xl border border-brand-navy/15 bg-brand-cream/50 px-4 py-3 outline-none transition focus:border-brand-navy focus:bg-white"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block font-bold text-brand-navy">
                お問い合わせ内容 <span className="text-brand-wine">必須</span>
              </span>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-2xl border border-brand-navy/15 bg-brand-cream/50 px-4 py-3 outline-none transition focus:border-brand-navy focus:bg-white"
              />
            </label>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full rounded-full bg-brand-navy px-8 py-4 text-sm font-bold tracking-[0.14em] text-white transition hover:bg-brand-wine md:w-auto md:min-w-64"
            >
              送信する
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

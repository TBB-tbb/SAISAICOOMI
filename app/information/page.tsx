import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "お知らせ",
};

export default function InformationPage() {
  return (
    <>
      <PageTitle title="お知らせ" label="INFORMATION" />
      <section className="content-shell pb-20">
        <div className="rounded-3xl border border-brand-navy/10 bg-white px-8 py-16 text-center shadow-soft">
          <p className="text-xl font-bold tracking-[0.18em] text-brand-navy">
            準備中
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "会社概要",
  robots: {
    index: false,
    follow: false,
  },
};

const companyRows = [
  ["会社名", "SAISAICOOMI JAPAN 株式会社"],
  ["代表", "中島久美子"],
  ["所在地", "〒234-0055 神奈川県横浜市港南区日野南1-5-1  2F"],
  ["TEL", "045-353-8908"],
];

export default function CompanyPage() {
  return (
    <>
      <PageTitle title="会社概要" label="COMPANY" />
      <section className="content-shell pb-20">
        <div className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft">
          <dl className="divide-y divide-brand-navy/10">
            {companyRows.map(([label, value]) => (
              <div key={label} className="grid gap-2 px-6 py-5 md:grid-cols-[180px_1fr] md:px-8">
                <dt className="font-bold text-brand-navy">{label}</dt>
                <dd className="leading-8 text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-brand-navy/10 bg-brand-cream px-6 py-6 md:px-8">
            <p className="mb-2 text-sm font-bold tracking-[0.16em] text-brand-wine">
              関連会社
            </p>
            <p className="font-bold text-brand-navy">Tokushima Auction Market 株式会社</p>
          </div>
        </div>
      </section>
    </>
  );
}

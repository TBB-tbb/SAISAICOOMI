import { AccentBars } from "@/components/AccentBars";

type PageTitleProps = {
  title: string;
  label: string;
  lead?: string;
};

export function PageTitle({ title, label, lead }: PageTitleProps) {
  return (
    <section className="content-shell pb-8 pt-12 md:pb-10 md:pt-16">
      <div className="mb-5">
        <AccentBars />
      </div>
      <p className="mb-2 text-sm font-bold tracking-[0.22em] text-brand-wine">
        {label}
      </p>
      <h1 className="text-3xl font-bold tracking-wide text-brand-navy md:text-5xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-5 max-w-2xl whitespace-pre-line text-base leading-8 text-slate-700">{lead}</p>
      ) : null}
    </section>
  );
}

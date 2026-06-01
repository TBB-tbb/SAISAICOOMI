import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "取扱商品",
};

const products = [
  {
    name: "ココナッツシュガー",
    image: "/images/1COCO-Sugar.webp",
  },
  {
    name: "ココナッツクリーム",
    image: "/images/2COCO-Cream.webp",
  },
  {
    name: "ココナッツ酢",
    image: "/images/3COCO-Vinegar.webp",
  },
  {
    name: "ココナッツキャンディー(ボカヨ)",
    image: "/images/4COCO-Candy.webp",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageTitle
        title="取扱商品"
        label="PRODUCTS"
        lead="素材の個性を大切にした、毎日の食卓に取り入れやすい商品をご紹介します。"
      />
      <section className="content-shell pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-brand-cream p-7">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-52 w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="min-h-14 text-xl font-bold leading-7 text-brand-navy">
                  {product.name}
                </h2>
                <a
                  href="#"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-brand-wine"
                >
                  Online Store（準備中）
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

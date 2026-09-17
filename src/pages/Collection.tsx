import { useSearchParams } from "react-router-dom";

import { CtaSection } from "@/components/CtaSection";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { categories, products, type Category } from "@/data/products";
import { cn } from "@/lib/utils";

export default function Collection() {
  const [params, setParams] = useSearchParams();
  const active = (params.get("categoria") as Category | null) ?? "todos";
  const filtered = active === "todos" ? products : products.filter((p) => p.category === active);

  const select = (value: string) => {
    if (value === "todos") setParams({}, { replace: true });
    else setParams({ categoria: value }, { replace: true });
  };

  return (
    <>
      <PageHeader
        eyebrow="Outono · Inverno 2026"
        title={
          <>
            A <em>Coleção</em>
          </>
        }
        description="Jeans, roupas e acessórios escolhidos para durar. Clique em uma peça para ver detalhes e falar com a gente."
      />

      <section className="container pb-24 md:pb-40 lg:pb-64">
        <div className="sticky top-[68px] z-30 -mx-5 mb-14 border-y border-earth/10 bg-cream/90 px-5 backdrop-blur-md md:top-[76px] md:mx-0 md:mb-20 md:px-0">
          <div className="flex items-center justify-between gap-6 py-4">
            <div role="tablist" aria-label="Filtrar por categoria" className="-mx-1 flex gap-1 overflow-x-auto md:gap-4">
              {categories.map((c) => (
                <button
                  key={c.value}
                  role="tab"
                  aria-selected={active === c.value}
                  onClick={() => select(c.value)}
                  className={cn(
                    "whitespace-nowrap px-3 py-2 font-sans text-[0.68rem] font-medium uppercase tracking-[0.25em] transition-colors duration-500",
                    active === c.value ? "text-caramel" : "text-earth/60 hover:text-earth",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <span className="hidden font-serif text-lg italic text-earth/60 sm:block">
              {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
            </span>
          </div>
        </div>

        <div key={active} className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 md:gap-x-10 md:gap-y-24 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 120}>
              {/* Coluna central levemente deslocada para um ritmo editorial */}
              <ProductCard product={product} className={cn(i % 3 === 1 && "lg:translate-y-24")} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection image="1776951129920-83a6b0a9345e" />
    </>
  );
}

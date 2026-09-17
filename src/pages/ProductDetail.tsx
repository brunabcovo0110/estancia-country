import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Instagram, MessageCircle } from "lucide-react";

import { Star, StarDivider } from "@/components/brand";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { categoryLabel, getProduct, products } from "@/data/products";
import { cn, instagramLink, unsplash, whatsappLink } from "@/lib/utils";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);
  const message = `Olá! Tenho interesse na peça "${product.name}" (${product.price})${size ? `, tamanho ${size}` : ""}. Pode me ajudar?`;

  return (
    <>
      <div className="container pt-28 md:pt-32">
        <Link to="/colecao" className="inline-flex items-center gap-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-earth/60 transition-colors hover:text-earth">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.3} /> Voltar à coleção
        </Link>
      </div>

      <section className="container grid gap-12 py-10 md:grid-cols-12 md:gap-10 md:py-14">
        {/* Galeria */}
        <div className="md:col-span-7 md:flex md:gap-5">
          <div className="order-2 flex-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
              {product.images.map((id, i) => (
                <img
                  key={id}
                  src={unsplash(id, 1400, 1750)}
                  alt={i === activeImage ? `${product.name} — foto ${i + 1}` : ""}
                  aria-hidden={i !== activeImage}
                  className={cn(
                    "img-earthy absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-editorial",
                    i === activeImage ? "scale-100 opacity-100" : "scale-[1.03] opacity-0",
                  )}
                />
              ))}
            </div>
          </div>
          <div className="order-1 mt-4 flex gap-3 md:mt-0 md:w-24 md:flex-col" role="tablist" aria-label="Fotos da peça">
            {product.images.map((id, i) => (
              <button
                key={id}
                role="tab"
                aria-selected={i === activeImage}
                aria-label={`Ver foto ${i + 1}`}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "aspect-[4/5] w-20 overflow-hidden transition-opacity duration-500 md:w-full",
                  i === activeImage ? "opacity-100 ring-1 ring-earth ring-offset-2 ring-offset-cream" : "opacity-50 hover:opacity-90",
                )}
              >
                <img src={unsplash(id, 200, 250)} alt="" className="img-earthy h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Informações */}
        <div className="md:col-span-4 md:col-start-9">
          <div className="md:sticky md:top-28">
            <Reveal>
              <p className="eyebrow mb-5">{categoryLabel(product.category)}</p>
              <h1 className="display text-5xl text-earth md:text-6xl">{product.name}</h1>
              <p className="mt-4 font-serif text-xl italic text-earth/70">{product.tagline}</p>
              <p className="mt-8 font-sans text-2xl font-light text-earth">{product.price}</p>

              <StarDivider className="my-8" />

              <p className="leading-[1.8] text-earth/80">{product.description}</p>

              <div className="mt-10">
                <p className="mb-4 font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-earth/60">
                  Tamanho {size && <span className="text-caramel">· {size}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s === size ? null : s)}
                      aria-pressed={s === size}
                      className={cn(
                        "h-11 min-w-11 border px-3 font-sans text-xs transition-colors duration-300",
                        s === size ? "border-earth bg-earth text-cream" : "border-earth/25 text-earth hover:border-earth",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <Button asChild size="lg">
                  <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
                    <MessageCircle strokeWidth={1.4} /> Comprar pelo WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={instagramLink} target="_blank" rel="noreferrer">
                    <Instagram strokeWidth={1.4} /> Chamar no Instagram
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-earth/50">
                Loja 100% online. Tire dúvidas sobre medidas, disponibilidade e envio direto com a nossa equipe.
              </p>

              <details className="group mt-10 border-t border-earth/15 py-5" open>
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-[0.68rem] font-medium uppercase tracking-[0.25em] text-earth">
                  Detalhes da peça
                  <span className="text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <ul className="mt-5 space-y-3">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-earth/80">
                      <Star className="h-2 w-2 text-caramel" /> {d}
                    </li>
                  ))}
                </ul>
              </details>
              <details className="group border-y border-earth/15 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-[0.68rem] font-medium uppercase tracking-[0.25em] text-earth">
                  Envio & trocas
                  <span className="text-lg font-light transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 text-sm leading-relaxed text-earth/80">
                  Enviamos para todo o Brasil com código de rastreio. A primeira troca é por nossa conta em até 7 dias após o
                  recebimento.
                </p>
              </details>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container py-24 md:py-32">
          <SectionHeading eyebrow="Combine com" title={<>Você também <em>vai gostar</em></>} className="mb-14" />
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

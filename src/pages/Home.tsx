import { Link } from "react-router-dom";
import { ArrowRight, Gem, MessageCircle, Package, Ruler } from "lucide-react";

import { DiamondStar, Star, StarDivider } from "@/components/brand";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { unsplash } from "@/lib/utils";

const differentials = [
  { icon: Gem, title: "Curadoria autoral", text: "Cada peça é escolhida a dedo por quem vive o estilo country no dia a dia." },
  { icon: Ruler, title: "Consultoria de caimento", text: "Ajudamos você a encontrar o tamanho e a modelagem ideais antes da compra." },
  { icon: Package, title: "Envio para todo o Brasil", text: "Embalagem cuidadosa e rastreio do pedido do nosso ateliê até a sua porteira." },
  { icon: MessageCircle, title: "Atendimento próximo", text: "Converse com a gente pelo WhatsApp ou Instagram, sem robôs e sem pressa." },
];

// Nomes ilustrativos — substituir pelos parceiros reais da marca.
const partners = ["Selaria Vale Verde", "Couros do Cerrado", "Tecelagem Aurora", "Chapelaria Três Estrelas", "Ateliê Porteira"];

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Manifesto curto */}
      <section className="container py-24 md:py-40">
        <Reveal className="mx-auto max-w-4xl text-center">
          <DiamondStar className="mx-auto mb-10 h-10 w-10 text-caramel" />
          <p className="display text-3xl text-earth sm:text-4xl md:text-6xl">
            Para a mulher que carrega a <em className="text-caramel">tradição</em> no peito e a{" "}
            <em className="text-caramel">elegância</em> em cada passo.
          </p>
        </Reveal>
      </section>

      {/* Destaques — grid assimétrico */}
      <section id="destaques" className="container scroll-mt-24 pb-24 md:pb-40">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Destaques da estação" title={<>Peças que <em>ficam</em></>} />
          <Reveal>
            <Button asChild variant="link">
              <Link to="/colecao">
                Ver toda a coleção <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 md:grid-cols-12 md:gap-x-10">
          <Reveal className="md:col-span-7">
            <ProductCard product={featured[0]} aspect="aspect-[4/5]" index={0} />
          </Reveal>
          <Reveal delay={150} className="md:col-span-4 md:col-start-9 md:mt-48">
            <ProductCard product={featured[1]} index={1} />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-2 md:self-center">
            <ProductCard product={featured[2]} index={2} />
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7 md:-mt-32">
            <ProductCard product={featured[3]} aspect="aspect-[4/5]" index={3} />
          </Reveal>
        </div>
      </section>

      {/* Filosofia / história */}
      <section className="bg-cream-deep/60 py-24 md:py-40">
        <div className="container grid items-center gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="relative md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={unsplash("1545556227-703d61c769d2", 1100, 1450)}
                alt="Mulher montando a cavalo em um campo, em preto e branco"
                loading="lazy"
                className="img-mono h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-44 border-8 border-cream-deep md:block lg:-right-16 lg:w-56">
              <img src={unsplash("1553385363-6d4790dbd976", 500, 620)} alt="" aria-hidden="true" loading="lazy" className="img-earthy aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <p className="eyebrow mb-6">Nossa filosofia</p>
            <h2 className="display text-4xl text-earth md:text-6xl">
              Nascida na lida,
              <br />
              <em>vestida para a vida.</em>
            </h2>
            <div className="mt-10 space-y-6 leading-relaxed text-earth/80 md:text-lg">
              <p>
                A Estância Country nasceu do desejo de vestir a mulher do agro como ela realmente é: forte, trabalhadora e
                profundamente elegante. Crescemos entre porteiras, cavalos e estradas de terra — e sabemos que estilo não se
                perde no caminho.
              </p>
              <p>
                Unimos o jeans, o couro e o chapéu da tradição country a cortes contemporâneos e uma paleta sóbria, para
                peças que atravessam o dia no campo e a noite na cidade.
              </p>
            </div>
            <StarDivider className="my-10 max-w-xs" />
            <Button asChild variant="outline">
              <Link to="/sobre">Conheça nossa história</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container py-24 md:py-40">
        <SectionHeading
          align="center"
          eyebrow="Por que Estância"
          title="O cuidado está nos detalhes"
          className="mb-16 md:mb-24"
        />
        <div className="grid gap-px bg-earth/10 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="bg-cream p-8 md:p-10">
              <Icon className="mb-8 h-6 w-6 text-caramel" strokeWidth={1.1} />
              <h3 className="mb-4 font-serif text-2xl text-earth">{title}</h3>
              <p className="text-sm leading-relaxed text-earth/70">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-28">
          <p className="eyebrow mb-8 text-center text-earth/50">Parceiros & fornecedores</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
            {partners.map((p, i) => (
              <li key={p} className="flex items-center gap-10 font-serif text-xl italic text-earth/60 md:gap-14 md:text-2xl">
                {p}
                {i < partners.length - 1 && <Star className="hidden h-2 w-2 text-caramel/60 sm:block" />}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Lookbook em faixa */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {["1590881155820-8bc541eb95c7", "1472749551955-e2319841d9a0", "1682715829643-85dc08535121", "1649639763329-dccbd16fbf4d"].map(
          (id, i) => (
            <Link key={id} to="/colecao" className="group relative aspect-square overflow-hidden" aria-label="Ver coleção">
              <img
                src={unsplash(id, 800, 800)}
                alt=""
                loading="lazy"
                className={`${i % 2 ? "img-mono" : "img-earthy"} h-full w-full object-cover transition-transform duration-1400 ease-editorial group-hover:scale-105`}
              />
              <span className="absolute inset-0 bg-earth-dark/0 transition-colors duration-700 group-hover:bg-earth-dark/20" />
            </Link>
          ),
        )}
      </section>

      {/* Journal */}
      <section className="container py-24 md:py-40">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Journal" title={<>Histórias do <em>campo</em></>} />
          <Reveal>
            <Button asChild variant="link">
              <Link to="/blog">
                Todos os artigos <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="grid gap-14 md:grid-cols-3 md:gap-10">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 120} className={i === 1 ? "md:mt-20" : undefined}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

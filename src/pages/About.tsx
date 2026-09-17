import { DiamondStar, Longhorn, Star, StarDivider } from "@/components/brand";
import { CtaSection } from "@/components/CtaSection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { unsplash } from "@/lib/utils";

const values = [
  {
    number: "I",
    title: "Tradição",
    text: "Respeitamos as raízes do campo: o jeans que aguenta a lida, o couro que envelhece bem, o chapéu que protege e identifica.",
  },
  {
    number: "II",
    title: "Autenticidade",
    text: "Nada de fantasia western. Vestimos mulheres reais, com rotinas reais, que não precisam provar nada para ninguém.",
  },
  {
    number: "III",
    title: "Estilo",
    text: "Cortes contemporâneos, paleta sóbria e acabamento cuidadoso. Sofisticação sem exagero, presença sem ostentação.",
  },
];

const audience = [
  "Mulheres de 18 a 40 anos que vivem ou amam o universo do agro",
  "Quem transita entre a fazenda, o rodeio e a cidade na mesma semana",
  "Quem valoriza peças duráveis, bem cortadas e cheias de personalidade",
  "E também homens que buscam o country com o mesmo cuidado e bom gosto",
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a marca"
        title={
          <>
            Nossa <em>história</em>
          </>
        }
        description="Uma marca brasileira, 100% online, que traduz a essência do campo em moda com sofisticação e personalidade."
      />

      {/* Imagem panorâmica */}
      <Reveal className="container">
        <div className="aspect-[4/5] overflow-hidden sm:aspect-[16/9] md:aspect-[21/9]">
          <img
            src={unsplash("1494984858525-798dd0b282f5", 2200)}
            alt="Cavalos pastando em um campo aberto com montanhas ao fundo"
            className="img-earthy h-full w-full object-cover"
          />
        </div>
      </Reveal>

      {/* História */}
      <section className="container grid gap-14 py-24 md:grid-cols-12 md:py-40">
        <Reveal className="md:col-span-4">
          <p className="eyebrow mb-6">Desde a porteira</p>
          <p className="display text-4xl text-earth md:text-5xl">
            “Estilo não se perde na <em>estrada de terra</em>.”
          </p>
          <Longhorn className="mt-10 h-10 w-20 text-caramel/70" />
        </Reveal>
        <Reveal delay={150} className="space-y-6 leading-[1.85] text-earth/80 md:col-span-6 md:col-start-7 md:text-lg">
          <p>
            A Estância Country começou como começam as melhores histórias do interior: entre amigas, em volta de uma mesa de
            fazenda, conversando sobre a falta de roupas que fossem ao mesmo tempo práticas para a rotina do campo e bonitas o
            suficiente para qualquer ocasião.
          </p>
          <p>
            De um pequeno acervo de jeans e chapéus garimpados, nasceu uma curadoria com olhar próprio. Hoje, 100% online,
            levamos a todo o Brasil peças que misturam a força da tradição country com a leveza de um guarda-roupa moderno.
          </p>
          <p>
            O nosso símbolo — o crânio de longhorn, a estrela e o selo — fala de resistência, de rumo e de compromisso. É
            isso que colocamos em cada peça que escolhemos e em cada pedido que embalamos.
          </p>
        </Reveal>
      </section>

      {/* Valores */}
      <section className="bg-earth py-24 text-cream md:py-40">
        <div className="container">
          <Reveal className="mb-16 flex items-end justify-between gap-8 md:mb-24">
            <div>
              <p className="eyebrow mb-5 text-caramel-light">Nossos valores</p>
              <h2 className="display text-5xl md:text-7xl">
                O que nos <em>guia</em>
              </h2>
            </div>
            <DiamondStar className="hidden h-14 w-14 text-gold-muted md:block" />
          </Reveal>
          <div className="grid gap-14 md:grid-cols-3 md:gap-0">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 150} className="md:border-l md:border-cream/15 md:px-10 md:first:border-l-0 md:first:pl-0">
                <span className="font-serif text-lg italic text-gold-muted">{v.number}</span>
                <h3 className="mb-6 mt-3 font-serif text-4xl">{v.title}</h3>
                <p className="leading-relaxed text-cream/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A quem se destina */}
      <section className="container grid items-center gap-14 py-24 md:grid-cols-12 md:py-40">
        <div className="grid grid-cols-2 gap-4 md:col-span-6 md:gap-6">
          <Reveal>
            <img
              src={unsplash("1543059583-04b5b0950e9a", 700, 950)}
              alt="Mulher usando chapéu bege"
              loading="lazy"
              className="img-earthy aspect-[3/4] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="mt-16 md:mt-28">
            <img
              src={unsplash("1579037640797-f5ddded4f30d", 700, 950)}
              alt="Mulher montando a cavalo no campo"
              loading="lazy"
              className="img-mono aspect-[3/4] w-full object-cover"
            />
          </Reveal>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <SectionHeading
            eyebrow="Para quem vestimos"
            title={
              <>
                A mulher do agro, <em>chique</em> e sem clichês
              </>
            }
          />
          <Reveal delay={150}>
            <ul className="mt-10 space-y-5">
              {audience.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed text-earth/80">
                  <Star className="mt-2 h-2.5 w-2.5 shrink-0 text-caramel" />
                  {item}
                </li>
              ))}
            </ul>
            <StarDivider className="mt-12 max-w-xs" />
          </Reveal>
        </div>
      </section>

      <CtaSection image="1776951131138-b1ccd39ec685" />
    </>
  );
}

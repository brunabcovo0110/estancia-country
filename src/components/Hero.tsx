import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

import { Star } from "@/components/brand";
import { unsplash } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] items-end overflow-hidden bg-earth-dark text-cream">
      <img
        src={unsplash("1743018266688-abb9298fcbe3", 2400)}
        alt="Mulher de chapéu observando cavalos em um curral ao entardecer"
        className="img-earthy absolute inset-0 h-full w-full animate-slow-zoom object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/85 via-earth-dark/25 to-earth-dark/30" />

      <div className="container relative pb-14 md:pb-20">
        <p className="eyebrow mb-6 animate-fade-up text-cream/80 [animation-delay:300ms]">Coleção Outono · Inverno 2026</p>
        <h1 className="display animate-fade-up text-[3.6rem] [animation-delay:450ms] sm:text-8xl md:text-[9rem] lg:text-[11rem]">
          Estância
          <br />
          <span className="ml-[8vw] italic text-cream/95">Country</span>
        </h1>

        <div className="mt-10 flex animate-fade-up flex-col gap-8 [animation-delay:700ms] md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="flex items-center gap-4 font-serif text-2xl italic md:text-3xl">
            Seu Estilo <Star className="h-2.5 w-2.5 text-caramel-light" /> Sua Essência
          </p>
          <div className="flex items-center gap-10">
            <Link
              to="/colecao"
              className="link-underline font-sans text-[0.7rem] font-medium uppercase tracking-[0.3em]"
            >
              Descobrir a coleção
            </Link>
            <a href="#destaques" aria-label="Rolar para os destaques" className="hidden h-14 w-14 items-center justify-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-earth md:flex">
              <ArrowDown className="h-4 w-4" strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

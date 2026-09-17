import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Longhorn } from "@/components/brand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { unsplash, whatsappLink } from "@/lib/utils";

interface CtaSectionProps {
  image?: string;
}

/** Faixa final de chamada para contato/coleção. */
export function CtaSection({ image = "1579037631217-e4eebd0693bd" }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-earth text-cream">
      <img
        src={unsplash(image, 2000)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="img-mono absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-dark/90 via-earth-dark/60 to-transparent" />
      <div className="container relative py-28 md:py-40">
        <Reveal className="max-w-2xl">
          <Longhorn className="mb-10 h-10 w-20 text-gold-muted" />
          <h2 className="display text-5xl md:text-7xl">
            Encontre a peça que
            <br />
            <span className="italic text-caramel-light">conta a sua história.</span>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-cream/75">
            Atendimento próximo e personalizado, do primeiro contato à entrega. Fale com a gente e monte o seu look.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="light" size="lg">
              <Link to="/colecao">
                Ver coleção <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="accent" size="lg">
              <a href={whatsappLink("Olá! Gostaria de ajuda para escolher um look da Estância Country.")} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

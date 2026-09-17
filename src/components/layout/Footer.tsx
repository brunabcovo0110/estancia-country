import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

import { DiamondStar, Star } from "@/components/brand";
import { contact, instagramLink, whatsappLink } from "@/lib/utils";

const columns = [
  {
    title: "Navegue",
    links: [
      { to: "/", label: "Início" },
      { to: "/sobre", label: "Sobre" },
      { to: "/colecao", label: "Coleção" },
      { to: "/blog", label: "Journal" },
      { to: "/contato", label: "Contato" },
    ],
  },
  {
    title: "Coleção",
    links: [
      { to: "/colecao?categoria=jeans", label: "Jeans" },
      { to: "/colecao?categoria=roupas", label: "Roupas" },
      { to: "/colecao?categoria=acessorios", label: "Acessórios" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-earth-dark text-cream">
      <div className="container py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <DiamondStar className="mb-8 h-10 w-10 text-gold-muted" />
            <p className="display text-5xl md:text-7xl">
              Estância
              <br />
              <span className="italic text-caramel-light">Country</span>
            </p>
            <p className="mt-6 flex items-center gap-3 font-serif text-xl italic text-cream/70">
              Seu Estilo <Star className="h-2 w-2 text-gold-muted" /> Sua Essência
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="mb-6 font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-cream/50">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-cream/80 transition-colors hover:text-caramel-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <p className="mb-6 font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-cream/50">Fale conosco</p>
            <ul className="space-y-4 text-sm text-cream/80">
              <li>
                <a href={whatsappLink("Olá! Vim pelo site da Estância Country.")} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-caramel-light">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.3} /> {contact.whatsappLabel}
                </a>
              </li>
              <li>
                <a href={instagramLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-caramel-light">
                  <Instagram className="h-4 w-4" strokeWidth={1.3} /> @{contact.instagram}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-caramel-light">
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.3} /> {contact.email}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-cream/50">Loja 100% online · Enviamos para todo o Brasil</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Estância Country. Todos os direitos reservados.</p>
          <p className="font-serif text-sm italic">Tradição que se veste com elegância.</p>
        </div>
      </div>
    </footer>
  );
}

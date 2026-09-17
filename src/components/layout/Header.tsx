import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Instagram, Menu, X } from "lucide-react";

import { Star, Wordmark } from "@/components/brand";
import { cn, instagramLink } from "@/lib/utils";

const leftLinks = [
  { to: "/colecao", label: "Coleção" },
  { to: "/sobre", label: "Sobre" },
];
const rightLinks = [
  { to: "/blog", label: "Journal" },
  { to: "/contato", label: "Contato" },
];
const allLinks = [{ to: "/", label: "Início" }, ...leftLinks, ...rightLinks];

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Na home o header começa transparente sobre o hero.
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = "link-underline font-sans text-[0.68rem] font-medium uppercase tracking-[0.25em]";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out",
          overHero ? "bg-transparent py-6 text-cream" : "bg-cream/90 py-3 text-earth backdrop-blur-md",
          scrolled && !open && "shadow-[0_1px_0_rgba(92,58,33,0.08)]",
        )}
      >
        <div className="container grid grid-cols-[1fr_auto_1fr] items-center">
          <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
            {leftLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" aria-label="Estância Country — início" className="col-start-1 justify-self-start md:col-start-2 md:justify-self-center">
            <Wordmark light={overHero} className="md:items-center" />
          </Link>

          <div className="col-start-3 flex items-center justify-end gap-10">
            <nav className="hidden items-center gap-10 md:flex" aria-label="Secundária">
              {rightLinks.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Estância Country"
              className="hidden transition-opacity hover:opacity-60 md:block"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.4} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 p-2 md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.3} /> : <Menu className="h-5 w-5" strokeWidth={1.3} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-cream px-5 pb-10 pt-28 transition-all duration-700 ease-editorial md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Menu mobile">
          {allLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={({ isActive }) =>
                cn(
                  "font-serif text-5xl font-light transition-all duration-700",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  isActive ? "italic text-caramel" : "text-earth",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center justify-between border-t border-earth/15 pt-6 text-earth">
          <span className="flex items-center gap-2 font-serif italic">
            Seu Estilo <Star className="h-2 w-2 text-caramel" /> Sua Essência
          </span>
          <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5" strokeWidth={1.3} />
          </a>
        </div>
      </div>
    </>
  );
}

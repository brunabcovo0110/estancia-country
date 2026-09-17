import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import { LogoBadge, LogoHorizontal, Star } from "@/components/brand";
import { ContactForm } from "@/components/ContactForm";
import { instagramLink, useContactSettings, whatsappLink } from "@/lib/contact-settings";
import { unsplash } from "@/lib/utils";

interface Channel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function App() {
  // Dados de contato vêm do Supabase (tabela contact_settings).
  const settings = useContactSettings();

  const channels: Channel[] = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: settings.whatsapp_label,
      href: whatsappLink(settings.whatsapp, "Olá! Vim pelo site da Estância Country."),
      external: true,
    },
    { icon: Instagram, label: "Instagram", value: `@${settings.instagram}`, href: instagramLink(settings.instagram), external: true },
    { icon: Mail, label: "E-mail", value: settings.email, href: `mailto:${settings.email}` },
  ];

  return (
    <div className="min-h-screen bg-cream lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      {/* Foto com slogan: topo no celular, coluna fixa no desktop */}
      <aside className="relative h-[72svh] min-h-[480px] overflow-hidden bg-earth-dark lg:sticky lg:top-0 lg:h-screen">
        <img
          src={unsplash("1545556227-703d61c769d2", 1400, 1800)}
          alt="Mulher de chapéu montada a cavalo em um campo aberto"
          className="img-mono absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/90 via-earth-dark/20 to-earth-dark/40" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-28 text-cream md:px-12 lg:p-10">
          <p className="display text-5xl sm:text-6xl lg:text-5xl xl:text-6xl">
            Seu Estilo,
            <br />
            <em className="text-caramel-light">Sua Essência.</em>
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            Moda country com tradição e sofisticação. Estamos por perto para conversar com você.
          </p>
        </div>
      </aside>

      {/* Conteúdo */}
      <main className="relative flex flex-col px-5 pb-10 md:px-12 lg:min-h-screen lg:px-16 lg:pt-10 xl:px-24">
        <div className="mx-auto w-full max-w-2xl flex-1">
          <header className="animate-fade-up">
            {/* No celular o emblema fica sobreposto à borda da foto */}
            <LogoBadge className="relative z-10 -mt-20 h-40 w-40 rounded-full bg-cream p-1.5 shadow-[0_12px_40px_-12px_rgba(62,39,21,0.45)] md:h-44 md:w-44 lg:mt-0 lg:bg-transparent lg:p-0 lg:shadow-none" />
            <p className="eyebrow mt-10">Contato</p>
            <h1 className="display mt-4 text-5xl text-earth md:text-7xl">
              Vamos <em>conversar</em>
            </h1>
            <p className="mt-6 max-w-lg leading-relaxed text-earth/75">
              Tire dúvidas, faça seu pedido ou proponha uma parceria. Escolha o canal que preferir — respondemos em até um dia útil.
            </p>
          </header>

          {/* Canais */}
          <ul className="mt-12 animate-fade-up border-t border-earth/15 [animation-delay:150ms]">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label} className="border-b border-earth/15">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-4 py-6 transition-colors duration-500 hover:bg-cream-deep/60 sm:gap-5 md:px-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-earth/20 text-earth transition-colors duration-500 group-hover:border-earth group-hover:bg-earth group-hover:text-cream">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.3} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em] text-earth/50">{label}</span>
                    <span className="mt-1 block break-all font-serif text-lg text-earth min-[400px]:text-xl sm:text-2xl transition-colors duration-500 group-hover:text-caramel md:text-3xl">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-earth/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-caramel"
                    strokeWidth={1.2}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid animate-fade-up grid-cols-2 gap-4 text-[0.8rem] text-earth/70 [animation-delay:250ms] sm:text-sm">
            <p className="flex gap-2 sm:gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" strokeWidth={1.3} />
              <span>
                {settings.hours_weekdays}
                {settings.hours_saturday && (
                  <>
                    <br />
                    {settings.hours_saturday}
                  </>
                )}
              </span>
            </p>
            <p className="flex gap-2 sm:gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" strokeWidth={1.3} />
              <span>
                Loja 100% online
                <br />
                Atendemos todo o Brasil
              </span>
            </p>
          </div>

          {/* Formulário */}
          <section className="mt-20 animate-fade-up [animation-delay:350ms]" aria-labelledby="form-title">
            <div className="mb-10 flex items-center gap-4 text-caramel" aria-hidden="true">
              <span className="h-px flex-1 bg-current opacity-40" />
              <Star className="text-gold" />
              <span className="h-px flex-1 bg-current opacity-40" />
            </div>
            <h2 id="form-title" className="display text-4xl text-earth md:text-5xl">
              Prefere <em>escrever</em>?
            </h2>
            <p className="mb-10 mt-4 text-earth/70">Deixe sua mensagem e retornamos por e-mail.</p>
            <ContactForm subjects={settings.subjects} />
          </section>
        </div>

        <footer className="mx-auto mt-20 flex w-full max-w-2xl flex-col items-center gap-6 border-t border-earth/10 pt-10 text-center text-xs text-earth/50 sm:flex-row sm:justify-between sm:text-left">
          <LogoHorizontal className="w-56" />
          <p>© {new Date().getFullYear()} Estância Country</p>
        </footer>
      </main>
    </div>
  );
}

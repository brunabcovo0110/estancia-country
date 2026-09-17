import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

/** Cabeçalho editorial das páginas internas. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="container pb-14 pt-36 md:pb-24 md:pt-48">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="display text-5xl text-earth sm:text-6xl md:text-8xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={150} className="md:col-span-4 md:col-start-9">
            <p className="text-base leading-relaxed text-earth/75">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

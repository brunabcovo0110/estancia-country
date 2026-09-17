import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="display text-4xl text-earth md:text-6xl">{title}</h2>
      {description && <p className="mt-6 text-base leading-relaxed text-earth/75 md:text-lg">{description}</p>}
    </Reveal>
  );
}

import { cn } from "@/lib/utils";

/** Estrela de cinco pontas — motivo do logotipo. */
export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-3 w-3 fill-current", className)}>
      <path d="M12 1.5l2.9 7.6h8.1l-6.5 4.9 2.4 7.9L12 17.1l-6.9 4.8 2.4-7.9L1 9.1h8.1z" />
    </svg>
  );
}

/** Selo em losango com estrela, referência à moldura do emblema. */
export function DiamondStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("h-8 w-8", className)}>
      <rect x="9" y="9" width="22" height="22" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="12.5" y="12.5" width="15" height="15" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <path d="M20 14.5l1.5 4h4.2l-3.4 2.5 1.3 4.1L20 22.6l-3.6 2.5 1.3-4.1-3.4-2.5h4.2z" className="fill-current" />
    </svg>
  );
}

/** Crânio de longhorn estilizado em traço fino. */
export function Longhorn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 64"
      aria-hidden="true"
      className={cn("h-8 w-16", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M46 20 C34 22 18 19 8 8 C5 5 3 5 2 7 C6 17 20 28 44 28" />
      <path d="M74 20 C86 22 102 19 112 8 C115 5 117 5 118 7 C114 17 100 28 76 28" />
      <path d="M44 16 C50 13 70 13 76 16 L76 30 C74 38 70 46 66 58 C63 61 57 61 54 58 C50 46 46 38 44 30 Z" />
      <path d="M50 31 C52 29 55 30 56 33 C54 35 51 34 50 31 Z" />
      <path d="M70 31 C68 29 65 30 64 33 C66 35 69 34 70 31 Z" />
      <path d="M57 52 L58 55 M63 52 L62 55" />
    </svg>
  );
}

/** Divisor horizontal com estrela ao centro. */
export function StarDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 text-caramel", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-current opacity-40" />
      <Star />
      <span className="h-px flex-1 bg-current opacity-40" />
    </div>
  );
}

export function Wordmark({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("flex flex-col items-center leading-none", light ? "text-cream" : "text-earth", className)}>
      <span className="font-serif text-[1.55rem] font-medium tracking-[0.04em] md:text-[1.75rem]">Estância</span>
      <span className="mt-1 flex items-center gap-2 pl-[0.55em] font-sans text-[0.5rem] font-medium uppercase tracking-[0.55em]">
        <Star className="h-1.5 w-1.5 text-caramel" />
        Country
        <Star className="h-1.5 w-1.5 text-caramel" />
      </span>
    </span>
  );
}

import { cn } from "@/lib/utils";

/** Estrela de cinco pontas — motivo do logotipo. */
export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-3 w-3 fill-current", className)}>
      <path d="M12 1.5l2.9 7.6h8.1l-6.5 4.9 2.4 7.9L12 17.1l-6.9 4.8 2.4-7.9L1 9.1h8.1z" />
    </svg>
  );
}

/** Emblema circular oficial (public/logo.png). */
export function LogoBadge({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Estância Country — Seu Estilo · Sua Essência"
      width={490}
      height={490}
      className={cn("object-contain", className)}
    />
  );
}

/** Logotipo horizontal oficial (public/logo-horizontal.png). */
export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <img
      src="/logo-horizontal.png"
      alt="Estância Country — Seu Estilo · Sua Essência"
      width={560}
      height={173}
      className={cn("h-auto object-contain", className)}
    />
  );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Monta a URL de uma foto do Unsplash já recortada e otimizada. */
export function unsplash(id: string, width = 1200, height?: number) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "80",
    w: String(width),
  });
  if (height) params.set("h", String(height));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

export const contact = {
  whatsapp: "5535997807306",
  whatsappLabel: "(35) 99780-7306",
  instagram: "estancia___modacountry",
  email: "modacountryestancia@gmail.com",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = `https://instagram.com/${contact.instagram}`;

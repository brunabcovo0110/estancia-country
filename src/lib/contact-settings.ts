import { useEffect, useState } from "react";

import type { Tables } from "@/lib/database.types";
import { supabase } from "@/lib/supabase";

export type ContactSettings = Omit<Tables<"contact_settings">, "id" | "updated_at">;

/** Valores usados enquanto os dados do Supabase carregam (ou se a consulta falhar). */
export const defaultContactSettings: ContactSettings = {
  whatsapp: "5535997807306",
  whatsapp_label: "(35) 99780-7306",
  instagram: "estancia___modacountry",
  email: "modacountryestancia@gmail.com",
  hours_weekdays: "Seg. a sex., 9h às 18h",
  hours_saturday: "Sábados, 9h às 13h",
  subjects: ["Dúvidas", "Pedidos e entregas", "Parcerias", "Outro assunto"],
};

/** Lê os dados de contato da tabela contact_settings (editável no painel do Supabase). */
export function useContactSettings() {
  const [settings, setSettings] = useState<ContactSettings>(defaultContactSettings);

  useEffect(() => {
    let active = true;
    supabase
      .from("contact_settings")
      .select("whatsapp, whatsapp_label, instagram, email, hours_weekdays, hours_saturday, subjects")
      .eq("id", 1)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error("Erro ao carregar dados de contato:", error.message);
        if (active && data) setSettings(data);
      });
    return () => {
      active = false;
    };
  }, []);

  return settings;
}

export function whatsappLink(whatsapp: string, message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export function instagramLink(instagram: string) {
  return `https://instagram.com/${instagram}`;
}

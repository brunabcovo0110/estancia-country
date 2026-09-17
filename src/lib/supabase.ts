import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/database.types";

/**
 * URL e chave PUBLICÁVEL do projeto. Não são segredos: vão para o navegador de qualquer forma
 * e o acesso aos dados é controlado pelas permissões/RLS do banco. Ficam como padrão para o site
 * funcionar mesmo sem variáveis na Vercel; se existirem no .env/Vercel, elas têm prioridade.
 * Nunca coloque aqui a chave secreta (secret/service_role).
 */
const DEFAULT_SUPABASE_URL = "https://rxtwiopfcgvigdsfluhr.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Jt-yk3X-p6NqpGwhCXsvkA_CSsNg_BV";

const url = import.meta.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const publishableKey = import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || DEFAULT_SUPABASE_PUBLISHABLE_KEY;

// Site sem login: não há sessão para guardar.
export const supabase = createClient<Database>(url, publishableKey, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
});

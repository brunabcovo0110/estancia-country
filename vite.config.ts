import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Além do padrão VITE_, expõe as variáveis NEXT_PUBLIC_ (URL e chave publicável do Supabase).
  envPrefix: ["VITE_", "NEXT_PUBLIC_"],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});

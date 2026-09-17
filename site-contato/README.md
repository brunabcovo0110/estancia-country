# Estância Country — site de contato

Página única só com os canais de contato e o formulário (sem produtos).
React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

## Onde editar

- **WhatsApp, Instagram e e-mail:** `src/lib/utils.ts` → objeto `contact`.
- **Logo:** arquivos oficiais em `public/logo.png` (emblema) e `public/logo-horizontal.png`.
- **Horários e textos:** `src/App.tsx`.

## Formulário

Sem configuração, o envio é simulado. Para receber as mensagens, crie um formulário no
[Formspree](https://formspree.io) e adicione em `.env.local`:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/SEU_ID
```

## Deploy na Vercel

Importe o repositório na Vercel e defina **Root Directory = `site-contato`**. O restante já está em `vercel.json`.
Para o formulário, adicione `VITE_FORM_ENDPOINT` em *Settings → Environment Variables*.

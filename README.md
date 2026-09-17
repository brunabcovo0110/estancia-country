# Estância Country — site institucional

React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/sobre` | Sobre |
| `/colecao` (`?categoria=jeans\|roupas\|acessorios`) | Coleção |
| `/colecao/:slug` | Detalhe do item |
| `/blog` | Journal (blog) |
| `/blog/:slug` | Post |
| `/contato` | Contato |

## Onde editar

- **Contatos (WhatsApp, Instagram, e-mail):** `src/lib/utils.ts` → objeto `contact` (hoje com valores fictícios).
- **Peças da coleção:** `src/data/products.ts`
- **Posts do blog:** `src/data/posts.ts`
- **Parceiros da home:** `src/pages/Home.tsx` → `partners` (nomes ilustrativos).
- **Cores e fontes:** `tailwind.config.js` e `src/index.css`.
- **Imagens:** fotos do Unsplash referenciadas por ID; troque pelos IDs/URLs das fotos reais da marca.

## Formulário de contato

Valida os campos e mostra o retorno do envio. Sem configuração, o envio é **simulado**.
Para receber as mensagens de verdade, crie um formulário no [Formspree](https://formspree.io) (ou serviço similar)
e defina a variável em um arquivo `.env.local`:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/SEU_ID
```

## Deploy

Como é uma SPA com React Router, configure o servidor para redirecionar todas as rotas para `index.html`
(na Vercel e na Netlify isso já é padrão ou exige um único arquivo de rewrite).

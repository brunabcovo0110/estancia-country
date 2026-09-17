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

## Deploy na Vercel

O repositório tem **dois sites**; crie um projeto na Vercel para cada um, importando o mesmo repositório:

| Projeto | Root Directory |
| --- | --- |
| Site principal | `./` (raiz) |
| Site de contato | `site-contato` |

A Vercel detecta Vite automaticamente; as configurações ficam em `vercel.json` (build, pasta `dist`,
redirecionamento das rotas para o React Router e cache dos arquivos estáticos).
Para o formulário enviar de verdade, adicione `VITE_FORM_ENDPOINT` em *Settings → Environment Variables*
(veja `.env.example`) e faça um novo deploy.

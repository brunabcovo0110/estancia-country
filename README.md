# Estância Country — site de contato

Página única com os canais de contato e o formulário (sem produtos).
React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Supabase.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

## Variáveis de ambiente

Crie um arquivo `.env` (já ignorado pelo Git) com base no `.env.example`:

```
NEXT_PUBLIC_SUPABASE_URL=https://rxtwiopfcgvigdsfluhr.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

O Vite foi configurado (`vite.config.ts` → `envPrefix`) para aceitar o prefixo `NEXT_PUBLIC_`.
Use sempre a chave **publicável**; nunca coloque a chave secreta/service_role no site.

## Supabase

Sem login: qualquer visitante pode ver os dados de contato e enviar o formulário.

| Tabela | Visitante pode | Uso |
| --- | --- | --- |
| `contact_settings` | ler | WhatsApp, Instagram, e-mail, horários e assuntos do formulário (linha única) |
| `contact_messages` | só inserir (não lê) | Mensagens enviadas pelo formulário |

- **Ver mensagens:** painel do Supabase → *Table Editor* → `contact_messages`.
  A coluna `status` pode ser marcada como `respondido` ou `arquivado`.
- **Mudar contatos, horários ou assuntos:** *Table Editor* → `contact_settings`. O site atualiza sozinho.
- A estrutura do banco está em `supabase/migrations/`. Tipos TypeScript em `src/lib/database.types.ts`.

## Onde editar

- **Logo:** `public/logo.png` (emblema) e `public/logo-horizontal.png`.
- **Textos da página:** `src/App.tsx`.

## Deploy na Vercel

Importe o repositório na Vercel (Root Directory `./`) e faça o deploy. **Não é preciso cadastrar variáveis**:
a URL e a chave publicável do Supabase já estão como padrão em `src/lib/supabase.ts` (são públicas por natureza).
Se cadastrar `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, elas têm prioridade —
nesse caso, deixe a opção *Sensitive* desligada.

-- Aplicada no projeto Supabase "estancia-modacountry" (rxtwiopfcgvigdsfluhr).

-- Mensagens enviadas pelo formulário de contato (público pode enviar, ninguém lê pela API pública)
create table public.contact_messages (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null check (char_length(btrim(name)) between 2 and 120),
  email text not null check (char_length(email) <= 254 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'),
  phone text check (phone is null or phone ~ '^\(\d{2}\) \d{4,5}-\d{4}$'),
  subject text not null check (char_length(btrim(subject)) between 1 and 60),
  message text not null check (char_length(btrim(message)) between 10 and 1000),
  status text not null default 'novo' check (status in ('novo', 'respondido', 'arquivado'))
);

comment on table public.contact_messages is 'Mensagens do formulário de contato do site.';

create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

-- Visitantes só podem inserir os campos do formulário (id, data e status são controlados pelo banco)
revoke all on table public.contact_messages from anon, authenticated;
grant insert (name, email, phone, subject, message) on table public.contact_messages to anon, authenticated;
grant select, insert, update, delete on table public.contact_messages to service_role;

create policy "Visitantes podem enviar mensagens"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (status = 'novo');

-- Informações de contato exibidas no site (linha única, editável pelo painel)
create table public.contact_settings (
  id smallint primary key default 1 check (id = 1),
  whatsapp text not null check (whatsapp ~ '^\d{12,13}$'),
  whatsapp_label text not null,
  instagram text not null,
  email text not null,
  hours_weekdays text not null,
  hours_saturday text,
  subjects text[] not null check (cardinality(subjects) between 1 and 8),
  updated_at timestamptz not null default now()
);

comment on table public.contact_settings is 'Dados de contato exibidos no site (linha única).';

alter table public.contact_settings enable row level security;

revoke all on table public.contact_settings from anon, authenticated;
grant select on table public.contact_settings to anon, authenticated;
grant select, insert, update, delete on table public.contact_settings to service_role;

create policy "Dados de contato são públicos"
  on public.contact_settings
  for select
  to anon, authenticated
  using (true);

create function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

revoke execute on function public.set_updated_at() from public, anon, authenticated;

create trigger contact_settings_set_updated_at
  before update on public.contact_settings
  for each row execute function public.set_updated_at();

insert into public.contact_settings (whatsapp, whatsapp_label, instagram, email, hours_weekdays, hours_saturday, subjects)
values (
  '5535997807306',
  '(35) 99780-7306',
  'estancia___modacountry',
  'modacountryestancia@gmail.com',
  'Seg. a sex., 9h às 18h',
  'Sábados, 9h às 13h',
  array['Dúvidas', 'Pedidos e entregas', 'Parcerias', 'Outro assunto']
);

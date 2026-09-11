alter table public.products
  add column if not exists price_mode text not null default 'quote' check (price_mode in ('matrix','quote')),
  add column if not exists price_rows jsonb not null default '[]'::jsonb;

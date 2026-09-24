create table if not exists public.anamnesis_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  consent_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  experience text not null check (experience in ('Nunca pratiquei', 'Já pratiquei', 'Pratico atualmente')),
  goal text not null check (goal in ('Reduzir estresse', 'Cuidar de dores', 'Ganhar mobilidade', 'Meditar melhor', 'Autoconhecimento')),
  health text not null check (char_length(health) between 2 and 1000),
  period text not null check (period in ('Manhã', 'Tarde', 'Noite', 'Quero ver a grade'))
);

create index if not exists anamnesis_leads_created_at_idx on public.anamnesis_leads (created_at desc);

alter table public.anamnesis_leads enable row level security;

revoke all on public.anamnesis_leads from anon, authenticated;
grant select, insert on public.anamnesis_leads to service_role;

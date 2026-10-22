-- Novas opções de objetivo do formulário; os valores antigos seguem válidos para os leads já gravados.
alter table public.anamnesis_leads drop constraint if exists anamnesis_leads_goal_check;

alter table public.anamnesis_leads add constraint anamnesis_leads_goal_check check (
  goal in (
    'Reduzir estresse e ansiedade',
    'Reduzir dores e relaxar',
    'Ganhar mobilidade e flexibilidade',
    'Meditação e Autoconhecimento',
    'Ferramentas para empresas',
    'Reduzir estresse',
    'Cuidar de dores',
    'Ganhar mobilidade',
    'Meditar melhor',
    'Autoconhecimento'
  )
);

# Mãe Divina Yôga

Site institucional da Mãe Divina Yôga, desenvolvido com Next.js, TypeScript, Tailwind CSS, Motion e componentes acessíveis.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://127.0.0.1:3000`.

## Verificações

```bash
npm run lint
npm run build
```

## Conteúdo centralizado

- `src/data/site.ts`: contatos, navegação, banners e depoimentos.
- `src/data/class-schedule.ts`: agenda padrão de aulas e texto de apresentação.
- `src/data/events.ts`: agenda inicial e detalhes dos eventos.
- `src/data/products.ts`: catálogo e briefing fotográfico de cada produto.
- `src/lib/whatsapp.ts`: criação dos links e mensagens de WhatsApp.

## Agenda editorial

O painel em `/admin/eventos` permite criar, editar, excluir, importar e exportar eventos. No primeiro escopo, os rascunhos ficam no `localStorage` do navegador. O contrato `YogaEvent` e o armazenamento estão isolados para futura conexão com Supabase ou CMS sem refazer a interface pública.

O painel em `/admin/agenda` permite ao Reinor editar a apresentação e a grade de aulas, salvar um rascunho no dispositivo e gerar um link portátil para enviar às alunas. Cada link contém a versão publicada da programação e abre em `/agenda`, sem depender do armazenamento do navegador de quem recebe.

## Fichas de aula experimental

O formulário da landing page salva as respostas, com consentimento explícito, no projeto Supabase da Mãe Divina antes de abrir o WhatsApp. A tabela `public.anamnesis_leads` é criada pela migração em `supabase/migrations`; o acesso público direto à tabela é bloqueado por RLS e permissões. O painel `/admin/leads` mostra as fichas recentes e permite navegar por páginas.

Configure no servidor `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `LEADS_ACCESS_TOKEN_HASH` (SHA-256 do token privado) e `LEADS_SESSION_SECRET` (valor aleatório forte). Nenhuma dessas variáveis deve ter prefixo `NEXT_PUBLIC_`. O link dos responsáveis tem formato `https://<domínio>/admin/leads#access=<token>`; o token é removido da barra de endereço após a abertura e gera uma sessão de oito horas em cookie HttpOnly. Não há envio por e-mail.

O link funciona como credencial: qualquer pessoa que o receba pode consultar dados sensíveis das fichas. Compartilhe-o apenas com os responsáveis por canal confiável. Para revogar o link e as sessões existentes, gere outro token e atualize `LEADS_ACCESS_TOKEN_HASH` no servidor. Considere uma política de retenção/exclusão dessas informações antes de ampliar a divulgação do formulário.

## Informações que precisam de validação

- Biografias, formações e fotografias de Cadu e Reynor.
- Todos os contatos de WhatsApp de Reynor.
- Link oficial do YouTube.
- Datas, horários, valores e locais definitivos dos eventos.
- Nomes “Hofra”, “OMC”, “MIDI Funis” e “T.A.E.” conforme a nomenclatura oficial.
- Produtos, variações, preços, estoque e regras comerciais.
- Arquivo de persona citado no briefing, mas não encontrado na pasta.
- Arquivo final da logo. A versão atual foi recuperada do site público anterior e deve ser substituída pelo original quando disponibilizado.

O plano completo de captação e seleção de imagens está em [`docs/guia-de-conteudo-e-fotos.md`](docs/guia-de-conteudo-e-fotos.md).

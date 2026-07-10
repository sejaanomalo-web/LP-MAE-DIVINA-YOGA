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

- `src/data/site.ts`: contatos, navegação, banners, depoimentos e horários.
- `src/data/events.ts`: agenda inicial e detalhes dos eventos.
- `src/data/products.ts`: catálogo e briefing fotográfico de cada produto.
- `src/lib/whatsapp.ts`: criação dos links e mensagens de WhatsApp.

## Agenda editorial

O painel em `/admin/eventos` permite criar, editar, excluir, importar e exportar eventos. No primeiro escopo, os rascunhos ficam no `localStorage` do navegador. O contrato `YogaEvent` e o armazenamento estão isolados para futura conexão com Supabase ou CMS sem refazer a interface pública.

## Informações que precisam de validação

- Biografias, formações e fotografias de Cadu e Reynor.
- Todos os contatos de WhatsApp de Reynor.
- Link oficial do YouTube.
- Datas, horários, valores e locais definitivos dos eventos.
- Nomes “Hofra”, “De Ferra”, “OMC”, “MIDI Funis” e “T.A.E.” conforme a nomenclatura oficial.
- Produtos, variações, preços, estoque e regras comerciais.
- Arquivo de persona citado no briefing, mas não encontrado na pasta.
- Arquivo final da logo. A versão atual foi recuperada do site público anterior e deve ser substituída pelo original quando disponibilizado.

O plano completo de captação e seleção de imagens está em [`docs/guia-de-conteudo-e-fotos.md`](docs/guia-de-conteudo-e-fotos.md).

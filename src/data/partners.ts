/**
 * Empresas parceiras da Mãe Divina Yôga.
 *
 * Cadastro único usado pelos três formatos da home e pela página /parceiros.
 * Por enquanto são dados demonstrativos: quando chegarem os arquivos oficiais,
 * basta preencher `logo` (ex.: "/images/parceiros/nome.svg"), `name`,
 * `description` e `url` de cada empresa — os placeholders "LOGO" somem sozinhos.
 */
export type Partner = {
  id: string;
  /** Nome exibido na página /parceiros e usado no texto alternativo do logo. */
  name: string;
  /** Caminho do logotipo em /public. Sem logo, aparece o espaço "LOGO". */
  logo?: string;
  /** Descrição curta (opcional), exibida só na página /parceiros. */
  description?: string;
  /** Site oficial (opcional). Quando preenchido, o card vira link. */
  url?: string;
};

export const partners: Partner[] = [
  { id: "parceiro-01", name: "Empresa parceira 01" },
  { id: "parceiro-02", name: "Empresa parceira 02" },
  { id: "parceiro-03", name: "Empresa parceira 03" },
  { id: "parceiro-04", name: "Empresa parceira 04" },
];

/**
 * Liga/desliga cada formato de apresentação na página inicial.
 * Os três ficam ativos nesta primeira versão para comparação.
 */
export const partnerSections = {
  /** Formato 01: faixa de logotipos, após "Nossa Casa". */
  logoStrip: true,
  /** Formato 02: banner institucional, após "Encontre seu caminho". */
  banner: true,
  /** Formato 03: seção compacta antes do rodapé + página /parceiros. */
  footerStrip: true,
} as const;

/**
 * Empresas parceiras da Mãe Divina Yôga.
 *
 * Cadastro único usado pelo banner da home, pelo menu e pela página /parceiros.
 * Por enquanto são dados demonstrativos: quando chegarem as informações oficiais,
 * basta preencher os campos de cada empresa — os placeholders somem sozinhos.
 */
export type Partner = {
  id: string;
  /** Nome exibido na página /parceiros e usado no texto alternativo do logo. */
  name: string;
  /** Caminho do logotipo em /public. Sem logo, aparece o espaço "LOGO". */
  logo?: string;
  /** Ramo ou segmento da empresa (ex.: "Alimentação natural"). */
  segment?: string;
  /** Quem é a empresa: apresentação curta. */
  description?: string;
  /** Por que caminhamos juntos: o sentido da parceria com a Mãe Divina. */
  why?: string;
  /** O que a parceria oferece aos alunos (benefício, desconto, ação conjunta...). */
  benefit?: string;
  /** Site oficial (opcional). */
  url?: string;
  /** Instagram (URL completa, opcional). */
  instagram?: string;
};

export const partners: Partner[] = [
  { id: "parceiro-01", name: "Empresa parceira 01" },
  { id: "parceiro-02", name: "Empresa parceira 02" },
  { id: "parceiro-03", name: "Empresa parceira 03" },
  { id: "parceiro-04", name: "Empresa parceira 04" },
];

/**
 * Liga/desliga a apresentação de parceiros na página inicial.
 * (Os formatos "faixa de logos" e "seção antes do rodapé" foram descartados.)
 */
export const partnerSections = {
  /** Banner "Conexões que fazem parte da nossa história", após "Nossa Casa". */
  banner: true,
} as const;

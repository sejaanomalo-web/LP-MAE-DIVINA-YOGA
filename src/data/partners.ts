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
  /** Reduz o respiro interno para logotipos com composição quadrada. */
  logoPadding?: "compact";
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
  {
    id: "wellhub",
    name: "Wellhub",
    logo: "/images/wellhub-logo.jpeg",
    why: "As empresas preocupadas com a saúde de seus funcionários disponibilizam todas as vantagens de ser associado, e uma delas é fazer aulas conosco.",
    description: "Wellhub é a plataforma de bem-estar corporativo nº 1 do mundo.",
    benefit: "É simples e fácil: basta agendar sua aula, vir participar e fazer o check-in no dia!",
  },
  {
    id: "cia-da-magia",
    name: "Cia da Magia",
    logo: "/images/cia-da-magia-logo.jpeg",
    logoPadding: "compact",
    why: "Acreditamos no mesmo propósito: uma vida leve e feliz. Instrumentos e objetos incríveis nos auxiliam nesse processo de amor!",
    description: "Somos a Cia da Magia, uma loja presente há mais de 26 anos em Cascavel, com produtos místicos, incensos, cristais, velas, imagens e muito mais para auxiliar você a levar uma vida mais tranquila e conquistar tudo o que deseja.",
    benefit: "Compre na Cia da Magia e ganhe um amuleto mágico.",
  },
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

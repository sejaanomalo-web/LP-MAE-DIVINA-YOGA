export type ProductImage = {
  src: string;
  alt: string;
  label?: string;
};

export type Product = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  details?: string[];
  availabilityNote?: string;
  images?: ProductImage[];
  imageFit?: "contain" | "cover";
  photoBrief?: string;
  accent: string;
};

export const products: Product[] = [
  {
    id: "camisetas",
    name: "Camisetas, babylook e regata Mãe Divina",
    shortName: "Camisetas",
    description: "Camisetas, babylook e regata com a marca da Mãe Divina para a prática e o dia a dia.",
    images: [
      { src: "/images/products/camisetas-modelos.jpg", alt: "Modelos brancos de regata, camiseta e babylook Mãe Divina, vistos de frente e de costas" },
      { src: "/images/products/camiseta-unissex.jpg", alt: "Camiseta branca Mãe Divina, frente e costas", label: "Camiseta" },
      { src: "/images/products/camiseta-babylook.jpg", alt: "Babylook branca Mãe Divina, frente e costas", label: "Babylook" },
      { src: "/images/products/camiseta-regata.jpg", alt: "Regata branca Mãe Divina, frente e costas", label: "Regata" },
    ],
    imageFit: "contain",
    accent: "#9F3E54",
  },
  {
    id: "tapetes",
    name: "Tapetes de yoga",
    shortName: "Tapetes",
    description: "Base para a prática, com superfície texturizada e espaço para cada movimento.",
    images: [
      { src: "/images/products/tapete-vista-inteira.jpg", alt: "Tapete de yoga roxo visto por inteiro" },
      { src: "/images/products/tapete-detalhe.jpg", alt: "Detalhe da textura e do tapete de yoga roxo enrolado", label: "Detalhe" },
    ],
    imageFit: "contain",
    accent: "#355A46",
  },
  {
    id: "bolster",
    name: "Bolster de Yoga",
    shortName: "Bolster",
    description: "Apoio firme para a prática restaurativa e a meditação.",
    details: [
      "Com formato anatômico e alça para transporte, oferece apoio para aliviar tensões, abrir o peito e relaxar a coluna com conforto.",
      "Um companheiro para quem busca mais conforto e alinhamento no tapetinho.",
    ],
    images: [{ src: "/images/products/bolster.jpg", alt: "Bolster azul-marinho com alça sobre um tapete de yoga roxo" }],
    accent: "#C66C75",
  },
  {
    id: "descanso-de-olhos",
    name: "Almofadinha terapêutica para os olhos",
    shortName: "Almofadinha para os olhos",
    description: "Uma pausa suave para os olhos e a mente.",
    details: [
      "Preenchida com ervas naturais aromáticas, proporciona leve pressão relaxante e bloqueio da luminosidade.",
      "Ideal para práticas de yoga, meditação, momentos de descanso e noites mais tranquilas.",
    ],
    images: [{ src: "/images/products/almofadinha-olhos.jpg", alt: "Pessoa em repouso com almofadinha colorida sobre os olhos" }],
    accent: "#7B5B47",
  },
  {
    id: "cintos",
    name: "Cintos para Yoga",
    shortName: "Cintos",
    description: "Esse recurso te auxilia a desenvolver e corrigir posturas, trabalhando a flexibilidade e o alongamento com segurança, dentro dos limites do seu corpo.",
    images: [{ src: "/images/products/cinto-yoga.jpg", alt: "Cinto preto para Yoga com fivela metálica e demonstração de uso no alongamento de uma perna" }],
    imageFit: "contain",
    accent: "#425A63",
  },
  {
    id: "japas",
    name: "Japamalas",
    shortName: "Japamalas",
    description: "Ferramenta tradicional para meditação, foco e conexão interior.",
    details: [
      "Com 108 contas para acompanhar a contagem de mantras e respirações.",
      "Produzidas artesanalmente com madeira, sementes ou pedras naturais.",
      "Podem acompanhar a meditação ou ser usadas como colar ou pulseira de intenção.",
    ],
    images: [{ src: "/images/products/japamalas.jpg", alt: "Japamalas de madeira, sementes e pedras naturais com tasséis coloridos" }],
    accent: "#7A4C73",
  },
  {
    id: "incensos",
    name: "Incensos",
    shortName: "Incensos",
    description: "Um convite para desacelerar e respirar fundo.",
    details: [
      "Feitos com ervas, especiarias e resinas naturais, perfumam suavemente o ambiente e criam uma atmosfera acolhedora para yoga, meditação ou descanso em casa.",
    ],
    images: [{ src: "/images/products/incensos.jpg", alt: "Caixas e varetas de incenso sobre uma mesa, com uma vareta acesa" }],
    accent: "#6A543C",
  },
  {
    id: "oleos",
    name: "Óleos essenciais doTERRA",
    shortName: "Óleos essenciais",
    description: "Bem-estar em cada gota, com aromas para diferentes momentos do dia.",
    details: [
      "Óleos essenciais doTERRA para relaxar, renovar as energias ou criar uma atmosfera acolhedora. Consulte a variedade disponível e encontre o aroma que combina com você.",
    ],
    availabilityNote: "Atendimento personalizado: produto disponível apenas sob encomenda.",
    images: [{ src: "/images/products/oleos-essenciais-doterra.jpg", alt: "Frascos de óleos essenciais doTERRA com ervas e difusor sobre uma mesa" }],
    accent: "#496348",
  },
];

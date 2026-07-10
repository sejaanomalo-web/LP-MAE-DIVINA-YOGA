export type Product = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  photoBrief: string;
  accent: string;
};

export const products: Product[] = [
  {
    id: "camisetas",
    name: "Camisetas Mãe Divina",
    shortName: "Camisetas",
    description: "Peças leves com a marca da casa, pensadas para a prática e para os dias fora do tapete.",
    photoBrief: "Flat lay 4:5, tecido visível e uma foto vestida em movimento.",
    accent: "#9F3E54",
  },
  {
    id: "tapetes",
    name: "Tapetes de prática",
    shortName: "Tapetes",
    description: "Base, aderência e conforto para transformar qualquer canto em lugar de presença.",
    photoBrief: "Produto inteiro em 3:2 e detalhe macro da textura e acabamento.",
    accent: "#355A46",
  },
  {
    id: "busties",
    name: "Bústiês",
    shortName: "Bústiês",
    description: "Conforto e sustentação para movimentos livres, com uma seleção alinhada à prática consciente.",
    photoBrief: "Foto frontal e costas em fundo neutro, mais uma imagem em uso.",
    accent: "#C66C75",
  },
  {
    id: "velas",
    name: "Velas ritualísticas",
    shortName: "Velas",
    description: "Luz, intenção e atmosfera para criar pausas de cuidado dentro de casa.",
    photoBrief: "Close aceso em baixa luz e composição 1:1 com embalagem.",
    accent: "#C58B3A",
  },
  {
    id: "saquinhos",
    name: "Saquinhos artesanais",
    shortName: "Saquinhos",
    description: "Pequenos guardiões para japas, cristais, ervas e objetos de intenção.",
    photoBrief: "Conjunto aberto e fechado em vista superior, formato 4:5.",
    accent: "#7B5B47",
  },
  {
    id: "cintos",
    name: "Cintos para Yoga",
    shortName: "Cintos",
    description: "Apoio para explorar permanência, alinhamento e alcance com respeito ao corpo.",
    photoBrief: "Produto estendido e demonstração de uso em um asana simples.",
    accent: "#425A63",
  },
  {
    id: "japas",
    name: "Japas",
    shortName: "Japas",
    description: "Contas escolhidas para acompanhar meditação, mantra e presença cotidiana.",
    photoBrief: "Macro das contas e composição circular em fundo de linho.",
    accent: "#7A4C73",
  },
  {
    id: "incensos",
    name: "Incensos",
    shortName: "Incensos",
    description: "Aromas para marcar transições, preparar o ambiente e sustentar rituais de pausa.",
    photoBrief: "Embalagens e fumaça em luz lateral, com boa leitura do rótulo.",
    accent: "#6A543C",
  },
  {
    id: "oleos",
    name: "Óleos essenciais",
    shortName: "Óleos essenciais",
    description: "Seleção aromática para práticas de autocuidado e ambientação consciente.",
    photoBrief: "Frasco em close 1:1, rótulo frontal e ingredientes ao redor.",
    accent: "#496348",
  },
  {
    id: "essencias",
    name: "Essências",
    shortName: "Essências",
    description: "Composições para perfumar o espaço e criar uma assinatura sensorial de acolhimento.",
    photoBrief: "Frasco, embalagem e gesto de aplicação em enquadramento vertical.",
    accent: "#9B5F4E",
  },
];

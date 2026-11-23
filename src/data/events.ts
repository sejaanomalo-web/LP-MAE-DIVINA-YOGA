export type EventStatus = "confirmado" | "pre-agenda" | "gratuito";

export type YogaEvent = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  excerpt: string;
  description: string;
  additionalDescription?: string;
  introTitle?: string;
  aboutPractice?: { title: string; text: string };
  image: string;
  imageAlt: string;
  imagePosition?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePosition?: string;
  status: EventStatus;
  featured?: boolean;
  attractions: string[];
  notIncluded: string[];
};

export const seedEvents: YogaEvent[] = [
  {
    id: "pranayama-2026",
    slug: "oficina-de-pranayama",
    title: "Oficina de Pranayama",
    category: "pranayama",
    date: "2026-08-22",
    time: "15h - 18h",
    location: "Mãe Divina Yôga",
    excerpt: "Respiração, atenção e prática para levar presença à vida cotidiana.",
    description:
      "Uma tarde de investigação prática sobre a respiração consciente. O encontro combina fundamentos, exercícios progressivos e pausas de integração para que cada participante reconheça o próprio ritmo.",
    aboutPractice: {
      title: "O que é Pranayama",
      text: "Prática do Yoga que consiste no controle, na expansão e na condução consciente da respiração, com o objetivo de harmonizar o corpo, a mente e a energia vital. No sânscrito, Prana significa energia vital, enquanto Ayama é expansão ou regulação.",
    },
    image: "/images/oficina-pranayama-nadi.jpg",
    imageAlt: "Alunas praticando respiração alternada (Nadi Shodhana) sentadas sobre os tapetes",
    imagePosition: "center 30%",
    status: "pre-agenda",
    featured: true,
    attractions: ["Fundamentos do Pranayama", "Prática guiada", "Material de apoio", "Chá de integração", "Ambiente seguro e preparado"],
    notIncluded: ["Alimentação completa"],
  },
  {
    id: "sangha-estudos-2026",
    slug: "encontros-de-estudo-vedanta",
    title: "Encontros de Estudo Vedanta",
    category: "bhagavad-gita",
    date: "2026-09-12",
    time: "9h30 - 11h30",
    location: "Mãe Divina Yôga",
    excerpt: "Leitura compartilhada, escuta e filosofia aplicada à experiência presente.",
    description:
      "Um círculo de estudos aberto para aproximar textos da tradição do Yoga das perguntas da vida contemporânea.",
    additionalDescription:
      "No conhecido por viveka (discernimento), estudamos os textos antigos indianos com a mente livre e o coração aberto. A tradição do Jnana Yoga tem a intenção de investigar a verdadeira natureza do Ser, enquanto corpo, mente e espírito.",
    introTitle: "Um tempo reservado para buscar o autoconhecimento.",
    image: "/images/vedanta-altar-livros.jpg",
    imageAlt: "Altar com estátua de Buda, Bhagavad Gita e cartas de estudo sobre a mesa",
    imagePosition: "center 50%",
    status: "gratuito",
    attractions: ["Leitura orientada", "Roda de conversa", "Meditação breve"],
    notIncluded: ["Certificação", "Apostila impressa"],
  },
  {
    id: "feminino-2026",
    slug: "vivencia-do-feminino",
    title: "Vivência do Feminino",
    category: "feminino",
    date: "2026-10-03",
    time: "14h - 18h30",
    location: "Local a confirmar",
    excerpt: "Um momento para você, mulher, de reconexão do corpo, mente e espírito com sua ancestralidade. Autoconhecimento que respeita seus ciclos naturais e valoriza sua energia feminina.",
    description:
      "Uma vivência para desacelerar, reconhecer ciclos e cultivar presença em um espaço seguro. A programação combina movimento, dinâmicas, rituais de cuidado e práticas de expressão corporal.",
    image: "/images/feminino-turma.jpg",
    imageAlt: "Mulheres reunidas na sala da Mãe Divina durante a Vivência do Feminino",
    imagePosition: "center 55%",
    status: "pre-agenda",
    featured: true,
    attractions: ["Movimentos e dança", "Dinâmicas individuais e coletivas", "Rituais para início e final de ciclo", "Escuta ativa e acolhimento", "Rituais de partilha"],
    notIncluded: ["Transporte", "Hospedagem"],
  },
  {
    id: "parque-2026",
    slug: "eventos-gratuitos-no-parque",
    title: "Eventos Gratuitos no Parque",
    category: "parque",
    date: "2026-11-13",
    time: "Horário a confirmar",
    location: "Parque em Cascavel - PR (a confirmar)",
    excerpt: "Portas abertas para ampliar acesso, criar encontros e apresentar ferramentas simples de bem-estar.",
    description:
      "Práticas de Yoga ao ar livre, abertas e gratuitas, para aproximar mais pessoas do Yoga. Um encontro em meio à natureza para movimentar o corpo, respirar com consciência e compartilhar presença em comunidade.",
    introTitle: "Aproveite o que a vida tem de melhor.",
    image: "/images/parque-pratica-aberta.jpg",
    imageAlt: "Turma praticando Yoga ao ar livre sobre os tapetes, sob as árvores do parque",
    imagePosition: "center 45%",
    status: "gratuito",
    featured: true,
    attractions: ["Prática de Yoga ao ar livre", "Respiração e meditação", "Encontro em comunidade"],
    notIncluded: ["Tapete (traga o seu, se tiver)", "Transporte", "Alimentação"],
  },
  {
    id: "agni-2026",
    slug: "tarde-na-india",
    title: "Tarde na Índia",
    category: "tardes",
    date: "2026-12-05",
    time: "18h30 - 21h",
    location: "Mãe Divina Yôga",
    excerpt: "Uma tarde para mergulhar na cultura indiana com prática, sabores, aromas e música.",
    description:
      "Um encontro para vivenciar a Índia que inspira o Yoga: prática, mantras, histórias, aromas e sabores reunidos em uma tarde de presença e partilha.",
    introTitle: "Uma tarde pra guardar na memória",
    image: "/images/tarde-india-roda.jpg",
    imageAlt: "Roda de conversa com alunos sentados no chão da sala da Mãe Divina",
    imagePosition: "center 40%",
    heroImage: "/images/tarde-india-agni.jpg",
    heroImageAlt: "Reinor conduzindo um ritual com fogo sagrado na sala da Mãe Divina",
    heroImagePosition: "center 45%",
    status: "pre-agenda",
    attractions: ["Prática de Yoga", "Mantras e música", "Chai e sabores indianos", "Histórias da tradição", "Brindes"],
    notIncluded: ["Transporte"],
  },
  {
    id: "yoga-nidra",
    slug: "yoga-nidra",
    title: "Yoga Nidra",
    category: "yoga-nidra",
    date: "",
    time: "Horário a confirmar",
    location: "Local a confirmar",
    excerpt: "Relaxamento profundo e meditação guiada em um estado consciente entre a vigília e o sono.",
    description:
      "Conhecida como yoga do sono, é uma técnica de relaxamento profundo e meditação guiada que induz um estado consciente entre a vigília e o sono, mantendo a mente aberta e atenta enquanto o corpo relaxa por completo.",
    image: "/images/meditacao-grupo.jpg",
    imageAlt: "Grupo em prática de meditação na Mãe Divina Yôga",
    status: "pre-agenda",
    attractions: ["Relaxamento profundo", "Meditação guiada", "Atenção consciente"],
    notIncluded: [],
  },
];

export const eventCategories = [
  { value: "todos", label: "Todos" },
  { value: "tardes", label: "Tardes" },
  { value: "pranayama", label: "Pranayama" },
  { value: "bhagavad-gita", label: "Bhagavad Gita" },
  { value: "feminino", label: "Feminino" },
  { value: "parque", label: "No Parque" },
  { value: "yoga-nidra", label: "Yoga Nidra" },
] as const;

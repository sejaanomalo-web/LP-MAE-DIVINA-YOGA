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
  image: string;
  imageAlt: string;
  imagePosition?: string;
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
    image: "/images/oficina-pranayama.jpg",
    imageAlt: "Alunas em meditação sentada sobre os tapetes no espaço Mãe Divina",
    imagePosition: "center 20%",
    status: "pre-agenda",
    featured: true,
    attractions: ["Fundamentos do Pranayama", "Prática guiada", "Material de apoio", "Chá de integração"],
    notIncluded: ["Alimentação completa", "Tapete individual"],
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
      "Um círculo de estudos aberto para aproximar textos da tradição do Yoga das perguntas da vida contemporânea, com leitura, silêncio e conversa mediada.",
    image: "/images/casa-altar.jpg",
    imageAlt: "Ambiente de estudos e contemplação da Mãe Divina",
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
    excerpt: "Corpo, voz e presença em uma experiência de escuta e pertencimento.",
    description:
      "Uma vivência para desacelerar, reconhecer ciclos e cultivar presença em um espaço seguro. A programação combina movimento, respiração e práticas de expressão.",
    image: "/images/carol-retrato.jpg",
    imageAlt: "Carol em contato com a natureza",
    status: "pre-agenda",
    featured: true,
    attractions: ["Movimento consciente", "Prática de respiração", "Roda de partilha", "Ritual de encerramento"],
    notIncluded: ["Transporte", "Hospedagem"],
  },
  {
    id: "retiro-2026",
    slug: "retiro-mae-divina",
    title: "Retiro Mãe Divina",
    category: "retiro",
    date: "2026-11-13",
    endDate: "2026-11-15",
    time: "Sexta a domingo",
    location: "Região de Cascavel - PR",
    excerpt: "Três dias para sair do ruído, aprofundar a prática e voltar ao essencial.",
    description:
      "Uma imersão de fim de semana com práticas de Yoga, meditação, natureza, alimentação consciente e tempo livre. A proposta é criar espaço interno para escuta e renovação.",
    image: "/images/pratica-em-dupla.jpg",
    imageAlt: "Prática de confiança ao ar livre",
    status: "pre-agenda",
    featured: true,
    attractions: ["Práticas de Yoga", "Meditações", "Vivência na natureza", "Alimentação consciente"],
    notIncluded: ["Transporte até o local", "Itens de uso pessoal"],
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
    image: "/images/casa-luz.jpg",
    imageAlt: "Luz de fim de tarde no espaço Mãe Divina",
    status: "pre-agenda",
    attractions: ["Prática de Yoga", "Mantras e música", "Chai e sabores indianos", "Histórias da tradição"],
    notIncluded: ["Refeição completa", "Transporte"],
  },
];

export const eventCategories = [
  { value: "todos", label: "Todos" },
  { value: "tardes", label: "Tardes" },
  { value: "pranayama", label: "Pranayama" },
  { value: "bhagavad-gita", label: "Bhagavad Gita" },
  { value: "feminino", label: "Feminino" },
  { value: "retiro", label: "Retiro" },
] as const;

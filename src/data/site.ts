export type MenuLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  items?: MenuLink[];
};

export const siteContact = {
  whatsappNumber: "5545999724978",
  whatsappDisplay: "(45) 99972-4978",
  instagram: "https://www.instagram.com/maedivinayoga/",
  instagramHandle: "@maedivinayoga",
  addressLine: "Rua Castro Alves, 2444",
  addressDetail: "Centro, Cascavel - PR",
  mapsUrl:
    "https://maps.google.com/?q=Rua+Castro+Alves+2444,+Centro,+Cascavel+-+PR",
} as const;

export const navigation: NavigationItem[] = [
  {
    label: "Nossa Casa",
    href: "/nossa-casa",
    items: [
      { label: "História", href: "/nossa-casa#historia", description: "A origem e os ciclos da casa" },
      { label: "Quem Somos", href: "/nossa-casa#quem-somos", description: "Presença, cuidado e pertencimento" },
      { label: "Cadu", href: "/nossa-casa#cadu", description: "Trajetória e contribuição" },
      { label: "Reynor", href: "/nossa-casa#reynor", description: "Conexões e projetos" },
      { label: "Missão, Visão e Valores", href: "/nossa-casa#valores", description: "O que sustenta cada encontro" },
    ],
  },
  {
    label: "Contato e Agenda",
    href: "/contato",
    items: [
      { label: "Horários", href: "/contato#horarios", description: "Grade semanal de práticas" },
      { label: "Zap", href: `https://wa.me/${siteContact.whatsappNumber}`, description: "Converse com a nossa equipe" },
      { label: "Insta", href: siteContact.instagram, description: "Acompanhe a casa por perto" },
      { label: "YouTube", href: "/contato#youtube", description: "Canal em preparação" },
      { label: "Alunos", href: "/#depoimentos", description: "Histórias de quem pratica" },
      { label: "Depoimentos", href: "/#depoimentos", description: "Experiências reais" },
      { label: "Ficha Anamnese", href: "/#aula-gratis", description: "Agende sua aula experimental" },
    ],
  },
  {
    label: "Eventos",
    href: "/eventos",
    items: [
      { label: "Tardes", href: "/eventos?tema=tardes" },
      { label: "Pranayama", href: "/eventos?tema=pranayama" },
      { label: "Agni", href: "/eventos?tema=agni" },
      { label: "Hofra", href: "/eventos?tema=hofra" },
      { label: "Bhagavad Gita", href: "/eventos?tema=bhagavad-gita" },
      { label: "Feminino", href: "/eventos?tema=feminino" },
      { label: "De Ferra", href: "/eventos?tema=de-ferra" },
      { label: "Retiro", href: "/eventos?tema=retiro" },
    ],
  },
  {
    label: "Edificações",
    href: "/edificacoes",
    items: [
      { label: "OMC", href: "/edificacoes#omc" },
      { label: "Oficina de Meditação", href: "/edificacoes#oficina-de-meditacao" },
      { label: "Estudos", href: "/edificacoes#estudos" },
      { label: "SEVA", href: "/edificacoes#seva" },
      { label: "Eventos Gratuitos", href: "/edificacoes#eventos-gratuitos" },
      { label: "Osho", href: "/edificacoes#osho" },
      { label: "Sangha", href: "/edificacoes#sangha" },
    ],
  },
  {
    label: "Empresas",
    href: "/empresas",
    items: [
      { label: "NR1 e bem-estar", href: "/empresas#nr1", description: "Ferramentas para equipes" },
      { label: "Palestras", href: "/empresas#palestras", description: "Conteúdo que vira prática" },
      { label: "Seja nosso parceiro", href: `https://wa.me/${siteContact.whatsappNumber}?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20para%20empresas.`, description: "Fale pelo WhatsApp" },
    ],
  },
  {
    label: "Loja",
    href: "/loja",
    items: [
      { label: "Camisetas", href: "/loja#camisetas" },
      { label: "Tapetes", href: "/loja#tapetes" },
      { label: "Incensos", href: "/loja#incensos" },
      { label: "Bústiês", href: "/loja#busties" },
      { label: "Essências", href: "/loja#essencias" },
      { label: "Ver tudo", href: "/loja" },
    ],
  },
];

export const heroSlides = [
  {
    eyebrow: "Casa de cura, amor e acolhimento",
    title: "Mãe Divina Yôga",
    text: "Um espaço para respirar com presença, cuidar do corpo e reencontrar o que em você pede silêncio.",
    image: "/images/aula-hatha.jpg",
    alt: "Turma praticando Hatha Yoga no espaço Mãe Divina",
    position: "center 58%",
  },
  {
    eyebrow: "Yoga, meditação e vivências conscientes",
    title: "Presença que acolhe",
    text: "Práticas guiadas com técnica, escuta e respeito ao ritmo de cada corpo.",
    image: "/images/carol-retrato.jpg",
    alt: "Carol em postura meditativa ao ar livre",
    position: "center 42%",
  },
  {
    eyebrow: "Corpo, confiança e encontro",
    title: "Caminhos compartilhados",
    text: "Experiências que atravessam o tapete e cultivam relações mais conscientes com a vida.",
    image: "/images/pratica-em-dupla.jpg",
    alt: "Prática de yoga em dupla ao ar livre",
    position: "center 38%",
  },
  {
    eyebrow: "Há oito anos em Cascavel",
    title: "Entre. Respire. Fique.",
    text: "Uma casa viva, feita de detalhes, histórias e pessoas que escolheram voltar para si.",
    image: "/images/casa-luz.jpg",
    alt: "Interior iluminado do espaço Mãe Divina Yôga",
    position: "center 56%",
  },
] as const;

export const testimonials = [
  {
    author: "Fabíola Taques",
    quote:
      "Minhas aulas de yoga na Mãe Divina têm sido um verdadeiro presente na rotina. A cada aula, consigo me conectar comigo mesma, perceber meus limites, respeitar meu tempo e encontrar mais equilíbrio. A Carol conduz tudo com leveza e profundidade.",
  },
  {
    author: "Regilaine Sorbara",
    quote:
      "Fazer parte desse lugar é se sentir em casa e, a cada nova prática, reconhecer-se um novo ser, aprender a respeitar o corpo e honrar a própria história e essência.",
  },
  {
    author: "Pedro Luiz Studzinski",
    quote:
      "Trabalhamos corpo, mente e espírito em busca de flexibilidade, força, coragem, equilíbrio, consciência corporal e paz interior. Isso ajuda a atravessar melhor os obstáculos do dia a dia.",
  },
] as const;

export const indicativeSchedule = [
  { day: "Segunda", times: ["19h40 - 20h45"] },
  { day: "Terça", times: ["Consulte novas turmas"] },
  { day: "Quarta", times: ["18h30 - 19h40", "19h45 - 20h45"] },
  { day: "Quinta", times: ["16h - 17h", "18h30 - 19h30"] },
  { day: "Sexta", times: ["Vivências e agenda especial"] },
] as const;

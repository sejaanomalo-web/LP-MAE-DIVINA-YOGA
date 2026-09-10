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
      { label: "Reinor", href: "/nossa-casa#reinor", description: "Conexões e projetos" },
      { label: "Missão, Visão e Valores", href: "/nossa-casa#valores", description: "O que sustenta cada encontro" },
    ],
  },
  {
    label: "Contato e Agenda",
    href: "/contato",
    items: [
      { label: "Horários", href: "/contato#horarios", description: "Grade semanal de práticas" },
      { label: "Agenda de aulas", href: "/agenda", description: "Veja dias, horários e orientações" },
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
      { label: "Oficina de Pranayama", href: "/eventos/oficina-de-pranayama" },
      { label: "Sangha de Estudos", href: "/eventos/sangha-de-estudos" },
      { label: "Vivência do Feminino", href: "/eventos/vivencia-do-feminino" },
      { label: "Retiro Mãe Divina", href: "/eventos/retiro-mae-divina" },
      { label: "Agni: noite de presença", href: "/eventos/agni-noite-de-presenca" },
      { label: "Outros eventos", href: "/eventos", description: "Veja o calendário completo" },
    ],
  },
  {
    label: "Meditações",
    href: "/meditacoes",
    items: [
      { label: "Oficina de Meditação", href: "/meditacoes#oficina-de-meditacao" },
      { label: "OMC", href: "/meditacoes#omc" },
      { label: "Osho", href: "/meditacoes#osho" },
      { label: "Sangha", href: "/meditacoes#sangha" },
      { label: "Estudos", href: "/meditacoes#estudos" },
      { label: "SEVA", href: "/meditacoes#seva" },
      { label: "Eventos Gratuitos", href: "/meditacoes#eventos-gratuitos" },
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
    image: "/images/hero-turma-guerreiro.jpg",
    alt: "Turma praticando a postura do guerreiro no espaço Mãe Divina",
    position: "center 32%",
    positionMobile: "62% 30%",
    fit: "cover",
  },
  {
    eyebrow: "Yoga, meditação e vivências conscientes",
    title: "Presença que acolhe",
    text: "Práticas guiadas com técnica, escuta e respeito ao ritmo de cada corpo.",
    image: "/images/hero-carol.png",
    alt: "Carol em postura meditativa ao ar livre",
    position: "center center",
    positionMobile: "center center",
    fit: "cover",
  },
  {
    eyebrow: "Corpo, confiança e encontro",
    title: "Caminhos compartilhados",
    text: "Experiências que atravessam o tapete e cultivam relações mais conscientes com a vida.",
    image: "/images/hero-pratica-em-dupla.png",
    alt: "Prática de yoga em dupla ao ar livre",
    position: "center center",
    positionMobile: "center center",
    fit: "contain",
  },
  {
    eyebrow: "Há oito anos em Cascavel",
    title: "Entre. Respire. Fique.",
    text: "Uma casa viva, feita de detalhes, histórias e pessoas que escolheram voltar para si.",
    image: "/images/hero-reinor-namaste.png",
    alt: "Praticante em namastê durante aula na Mãe Divina Yôga",
    position: "center center",
    positionMobile: "center center",
    fit: "cover",
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

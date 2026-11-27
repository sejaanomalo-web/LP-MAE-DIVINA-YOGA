export type SiteVideo = {
  /** Caminho do arquivo em /public (ex.: "/videos/nossa-casa.mp4"). Vazio = seção oculta. */
  src: string;
  poster: string;
  title: string;
  orientation: "vertical" | "horizontal";
};

export const nossaCasaVideo: SiteVideo = {
  src: "",
  poster: "/images/casa-luz.jpg",
  title: "Conheça a Mãe Divina Yôga por dentro",
  orientation: "vertical",
};

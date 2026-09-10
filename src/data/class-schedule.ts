export type ClassScheduleSlot = {
  id: string;
  day: string;
  time: string;
  activity: string;
  teacher: string;
  note: string;
};

export type ClassSchedule = {
  title: string;
  introduction: string;
  updatedAt?: string;
  slots: ClassScheduleSlot[];
};

export const defaultClassSchedule: ClassSchedule = {
  title: "Agenda de aulas",
  introduction:
    "Escolha o horário que mais combina com a sua rotina. As práticas acolhem diferentes níveis de experiência; fale com a equipe para confirmar a vaga antes da primeira aula.",
  slots: [
    { id: "segunda-1940", day: "Segunda-feira", time: "19h40 — 20h45", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "quarta-1830", day: "Quarta-feira", time: "18h30 — 19h40", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "quarta-1945", day: "Quarta-feira", time: "19h45 — 20h45", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "quinta-1600", day: "Quinta-feira", time: "16h — 17h", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "quinta-1830", day: "Quinta-feira", time: "18h30 — 19h30", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "sexta-especial", day: "Sexta-feira", time: "Consulte a programação", activity: "Vivências e agenda especial", teacher: "Equipe Mãe Divina", note: "Datas divulgadas ao longo do mês." },
  ],
};

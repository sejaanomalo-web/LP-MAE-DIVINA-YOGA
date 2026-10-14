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
    { id: "segunda", day: "Segunda-feira", time: "18h30 e 19h40", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "terca", day: "Terça-feira", time: "18h30 e 19h40", activity: "Hatha Yoga e meditação", teacher: "Reinor", note: "" },
    { id: "quarta", day: "Quarta-feira", time: "18h30 e 19h40", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "quinta", day: "Quinta-feira", time: "16h e 18h30", activity: "Hatha Yoga", teacher: "Carol", note: "" },
    { id: "sabado", day: "Sábado", time: "9h", activity: "Hatha Yoga", teacher: "Carol", note: "" },
  ],
};

import type {
  Appointment,
  CalendarDay,
  FilterOption,
  MonthYear,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/sw/home", icon: "home" },
  { label: "Pacientes", href: "/sw/pacientes" },
  { label: "Perfil", href: "/sw/perfil" },
  { label: "Postagem", href: "/sw/postagem" },
];
export function getMonthLabel(month: number) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return months[month];
}

const WEEKDAY_LABELS = ["DOM.", "SEG.", "TER.", "QUA.", "QUI.", "SEX.", "SAB."];
export const miniWeekdayLabels = ["D", "S", "T", "Q", "Q", "S", "S"];

export function getPrevMonth(month: number, year: number): MonthYear {
  if (month <= 11) {
    return { month: month - 1, year };
  }
  return { month: 11, year: year - 1 };
}

export function getNextMonth(month: number, year: number): MonthYear {
  if (month <= 11) {
    return { month: month + 1, year };
  }
  return { month: 0, year: year + 1 };
}

// HARDCODE
///////////////////////////////////////////////////////////////

export const filterOptions: FilterOption[] = [
  { id: "odontologia-geral", label: "Odontologia geral" },
  { id: "ortodontia", label: "Ortodontia" },
  { id: "estetica-dental", label: "Estetica Dental" },
  { id: "endodontia", label: "Endodontia (Tratamento de Canal)" },
  { id: "periodontia", label: "Periodontia" },
];

const appointmentsByDay: Record<number, Appointment[]> = {
  20: [
    { time: "9:00", patient: "Mariana Baroni" },
    { time: "10:30", patient: "Will Smith" },
    { time: "14:15", patient: "Gabriella Jandres" },
    { time: "14:25", patient: "Gabriella Jandres" },
  ],
};
/////////////////////////////////////

export function buildMonthGrid(
  month: number,
  year: number,
  thisDay?: number,
): CalendarDay[] {
  // Calculamos o dia da semana do primeiro dia do mês,
  const firstDayOfMonth = new Date(Date.UTC(year, month, 1)).getUTCDay();
  // Calculamos o total de dias do mês atual
  const totalDays = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  // Calculamos o total de dias do mês anterior.
  const totalDaysPreviousMonth = new Date(
    Date.UTC(year, month, 0),
  ).getUTCDate();
  // Para criar uma grade de 5 semanas (35 dias), precisamos de 35 células, preenchendo os dias do mês atual e os dias necessários do mês anterior e seguinte para completar a grade.
  const totalCells = 35;

  return Array.from({ length: totalCells }, (_, cellIndex) => {
    // DADOS SOBRE O DIA
    // Calculamos o dia relativo ao mês atual.
    const relativeDay = cellIndex - firstDayOfMonth + 1;
    // Se for menor que 1, é do mês anterior. Se for maior que o total de dias, é do próximo mês.
    const isCurrentMonth = relativeDay >= 1 && relativeDay <= totalDays;

    // Calculamos o número do dia a ser exibido na célula.
    // Para os dias do mês atual, é o próprio dia relativo.
    // Para os dias do mês anterior, é o total de dias do mês anterior mais o dia relativo (que é negativo).
    // Para os dias do próximo mês, é o dia relativo menos o total de dias do mês atual.
    const day = isCurrentMonth
      ? relativeDay
      : relativeDay < 1
        ? totalDaysPreviousMonth + relativeDay
        : relativeDay - totalDays;

    // AGENDAMENTOS DO DIA
    // Para os dias do mês atual, buscamos os agendamentos. Para os dias fora do mês, não mostramos agendamentos.
    const dayAppointments = isCurrentMonth
      ? (appointmentsByDay[day] ?? [])
      : [];
    // Se for o mês atual, mostramos até 3 agendamentos.
    const appointments = isCurrentMonth
      ? dayAppointments.slice(0, 3)
      : undefined;
    // Se for o mês atual e de houver mais, indicamos quantos extras existem
    const extraAppointments = isCurrentMonth
      ? Math.max(dayAppointments.length - 3, 0)
      : undefined;

    // SELECIONA DIA ATUAL
    const selected = isCurrentMonth && day === thisDay;

    return {
      key: `day-${cellIndex}-${day}`,
      day,
      inCurrentMonth: isCurrentMonth,
      weekdayLabel: cellIndex < 7 ? WEEKDAY_LABELS[cellIndex] : undefined,
      appointments,
      extraAppointments,
      selected,
    };
  });
}

import type { Appointment, CalendarDay, FilterOption, NavItem } from "./types";

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/sw/home", icon: "home" },
  { label: "Pacientes", href: "/sw/pacientes" },
  { label: "Perfil", href: "/sw/perfil" },
  { label: "Postagem", href: "/sw/postagem" },
];

const WEEKDAY_LABELS = ["DOM.", "SEG.", "TER.", "QUA.", "QUI.", "SEX.", "SAB."];
export const miniWeekdayLabels = ["D", "S", "T", "Q", "Q", "S", "S"];

// HARDCODE
///////////////////////////////////////////////////////////////
export const monthLabel = "Setembro";
export const miniMonthLabel = "Setembro 2005";
export const thisDay = 25;
export const thisMonthIndex = 8; // Lembre-se que os meses são indexados de 0 (Janeiro) a 11 (Dezembro)
export const thisYear = 2005;

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

function buildMonthGrid(year: number, monthIndex: number): CalendarDay[] {
  // Calculamos o dia da semana do primeiro dia do mês,
  const firstDayOfMonth = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay();
  // Calculamos o total de dias do mês atual
  const totalDays = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  // Calculamos o total de dias do mês anterior.
  const totalDaysPreviousMonth = new Date(
    Date.UTC(year, monthIndex, 0),
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

// Exporta a grade do mês.
export const monthDays = buildMonthGrid(thisYear, thisMonthIndex);

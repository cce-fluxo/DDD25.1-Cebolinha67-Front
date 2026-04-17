import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import ChangeMonthButton from "./ChangeMonthButton";
import { buildMonthGrid, getMonthLabel } from "./data";
import type { CalendarDay } from "./types";

type MonthCalendarProps = {
  month: number;
  year: number;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type DayCellProps = {
  day: CalendarDay;
  index: number;
  total: number;
};

function DayCell({ day, index, total }: DayCellProps) {
  const isLastColumn = (index + 1) % 7 === 0;
  const isLastRow = index >= total - 7;

  return (
    // Cada célula do calendário é um item de lista, e usamos as classes para definir as bordas e o estilo com base na posição e no estado do dia.
    // Serve para fazer as bordas internas
    <li
      className={cx(
        "flex min-h-23 flex-col items-center gap-2 px-2 py-2 sm:min-h-29.5",
        !isLastColumn && "border-r border-[#B5B5B5]",
        !isLastRow && "border-b border-[#B5B5B5]",
      )}
    >
      {/* Rótulo do dia da semana, mostrado apenas na primeira linha */}
      {day.weekdayLabel ? (
        <span className="text-center text-xs font-semibold text-[#5754DE]">
          {day.weekdayLabel}
        </span>
      ) : null}

      {/* Célula do dia */}
      {/* Checa se é o dia selecionado e se é desse mes, e aplica o estilo correspondente */}
      <span
        className={cx(
          "text-xs leading-none",
          day.selected &&
            "grid size-5 place-items-center rounded-full bg-[#5754DE] font-semibold text-white",
          !day.selected && day.inCurrentMonth && "font-semibold text-[#5754DE]",
          !day.selected &&
            !day.inCurrentMonth &&
            "font-semibold text-[#696969]",
        )}
      >
        {/* Numero do dia */}
        {day.day}
      </span>

      {/* Agendamentos do dia (ate os 3 primeiros) */}
      {day.appointments && day.appointments.length > 0 ? (
        <div className="w-full space-y-1">
          {day.appointments.map((appointment) => (
            <article
              key={`${appointment.time}-${appointment.patient}`}
              className="flex items-center justify-between rounded-[5px] bg-[#E1E0FF] px-2 py-0.5 text-[10px] leading-none text-black"
            >
              <span>{appointment.time}</span>
              <span className="truncate pl-2 text-right">
                {appointment.patient}
              </span>
            </article>
          ))}

          {/* Numeros de agendamentos extras (apos o limite de 3) */}
          {day.extraAppointments ? (
            <p className="text-center text-[10px] font-bold text-[#5754DE]">
              + {day.extraAppointments}
            </p>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}

export function MonthCalendar({ month, year }: MonthCalendarProps) {
  const now = new Date();
  const today =
    now.getMonth() === month && now.getFullYear() === year ? now.getDate() : -1;
  const days = buildMonthGrid(month, year, today);
  return (
    <section className="overflow-hidden rounded-[15px] border border-[#B5B5B5] bg-white">
      <header className="flex h-14 items-center justify-between border-b border-[#9C9AFF] px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-[#5754DE]">
          {getMonthLabel(month)}
        </h2>

        <div className="flex items-center gap-1 text-[#5754DE]">
          <ChangeMonthButton
            direction="previous"
            calender="month"
            month={month}
            year={year}
          />
          <ChangeMonthButton
            direction="next"
            calender="month"
            month={month}
            year={year}
          />
        </div>
      </header>

      <div className="overflow-x-auto">
        <ol className="grid min-w-190 grid-cols-7">
          {days.map((day, index) => (
            <DayCell
              key={day.key}
              day={day}
              index={index}
              total={days.length}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

import type { CalendarDay } from "./types";

type MiniCalendarProps = {
  label: string;
  weekdayLabels: string[];
  days: CalendarDay[];
};

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M10.5 3.5 6 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M5.5 3.5 10 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MiniCalendar({
  label,
  weekdayLabels,
  days,
}: MiniCalendarProps) {
  return (
    <section className="rounded-[15px] border border-[#B5B5B5] bg-white p-5">
      <header className="mb-5 flex items-center justify-between text-[#5754DE]">
        <button
          type="button"
          aria-label="Mes anterior"
          className="grid size-6 place-items-center rounded-full transition-colors hover:bg-[#efefff]"
        >
          <ArrowLeftIcon />
        </button>

        <h2 className="text-base font-bold">{label}</h2>

        <button
          type="button"
          aria-label="Proximo mes"
          className="grid size-6 place-items-center rounded-full transition-colors hover:bg-[#efefff]"
        >
          <ArrowRightIcon />
        </button>
      </header>

      <div className="grid grid-cols-7 gap-y-3 text-center">
        {weekdayLabels.map((weekday, index) => (
          <span
            key={weekday + index}
            className="text-sm font-black leading-none text-[#9C9AFF]"
          >
            {weekday}
          </span>
        ))}

        {days.map((day) => (
          <span
            key={`mini-${day.key}`}
            className={`text-sm leading-none ${day.selected ? "font-bold text-[#5754DE]" : day.inCurrentMonth ? "text-black" : "text-[#696969]"}`}
          >
            {day.day}
          </span>
        ))}
      </div>
    </section>
  );
}

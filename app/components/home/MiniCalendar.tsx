import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import ChangeMonthButton from "./ChangeMonthButton";
import { buildMonthGrid, getMonthLabel, miniWeekdayLabels } from "./data";

type MiniCalendarProps = {
  month: number;
  year: number;
};

export function MiniCalendar({ month, year }: MiniCalendarProps) {
  const label = getMonthLabel(month) + " " + year;
  const weekdayLabels = miniWeekdayLabels;
  const now = new Date();
  const today =
    now.getMonth() === month && now.getFullYear() === year ? now.getDate() : -1;
  const days = buildMonthGrid(month, year, today);
  return (
    <section className="rounded-[15px] border border-[#B5B5B5] bg-white p-5">
      <header className="mb-5 flex items-center justify-between text-[#5754DE]">
        <ChangeMonthButton
          direction="previous"
          calender="mini"
          month={month}
          year={year}
        />

        <h2 className="text-base font-bold">{label}</h2>

        <ChangeMonthButton
          direction="next"
          calender="mini"
          month={month}
          year={year}
        />
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

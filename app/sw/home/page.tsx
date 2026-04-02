import { FilterPanel } from "@/app/components/home/FilterPanel";
import { MiniCalendar } from "@/app/components/home/MiniCalendar";
import { MonthCalendar } from "@/app/components/home/MonthCalendar";
import {
  filterOptions,
  miniMonthLabel,
  miniWeekdayLabels,
  monthDays,
  monthLabel,
} from "@/app/components/home/data";

export default function HomePage() {
  return (
    <main className="mx-auto grid w-full max-w-378 grid-cols-1 gap-4 px-3 py-4 lg:grid-cols-[355px_minmax(0,1fr)] lg:items-start">
      <aside className="space-y-4">
        <MiniCalendar
          label={miniMonthLabel}
          weekdayLabels={miniWeekdayLabels}
          days={monthDays}
        />
        <FilterPanel options={filterOptions} />
      </aside>
      <MonthCalendar month={monthLabel} days={monthDays} />
    </main>
  );
}

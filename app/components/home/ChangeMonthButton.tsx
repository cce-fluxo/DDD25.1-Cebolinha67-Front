import { get } from "http";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import Link from "next/link";
import { getNextMonth, getPrevMonth } from "./data";

interface ChangeMonthButtonProps {
  direction: "previous" | "next";
  calender: "mini" | "month";
  month: number;
  year: number;
}

export default function ChangeMonthButton({
  direction,
  calender,
  month,
  year,
}: ChangeMonthButtonProps) {
  const isPrevious = direction === "previous";
  const isMini = calender === "mini";
  const label = isPrevious ? "Mês anterior" : "Próximo mês";
  const iconSize = isMini ? 4 : 5;
  const buttonSize = isMini ? "size-6" : "size-8";
  const Icon = isPrevious ? ArrowLeftIcon(iconSize) : ArrowRightIcon(iconSize);
  const Parm = isPrevious
    ? getPrevMonth(month, year)
    : getNextMonth(month, year);
  const href = `/home/${Parm.month}/${Parm.year}`;

  return (
    <Link
      href={href}
      aria-label={label}
      className={`grid ${buttonSize} place-items-center rounded-full transition-colors hover:bg-[#efefff]`}
    >
      {Icon}
    </Link>
  );
}

/*  MINI CALENDAR

        <button
          type="button"
          aria-label="Proximo mes"
          className="grid size-6 place-items-center rounded-full transition-colors hover:bg-[#efefff]"
        >
          {ArrowRightIcon(4)}
        </button>
      </header>
       
      
      
*/
/*  MONTH CALENDAR
        <button
            type="button"
            aria-label="Proxima semana"
            className="grid size-8 place-items-center rounded-full transition-colors hover:bg-[#efefff]"
          >
            {ArrowRightIcon(5)}
          </button>
*/

import { MonthCalendar } from "@/app/components/home/MonthCalendar";

type Props = {
  params: Promise<{
    month: string;
    year: string;
  }>;
};

export default async function HomeMonthPage({ params }: Props) {
  const { month, year } = await params;
  return <MonthCalendar year={Number(year)} month={Number(month)} />;
}

import { MonthCalendar } from "@/app/components/home/MonthCalendar";

type Props = {
  params: Promise<{
    year: string;
    month: string;
  }>;
};

export default async function HomeMonthPage({ params }: Props) {
  const { year, month } = await params;
  return <MonthCalendar year={Number(year)} month={Number(month)} />;
}

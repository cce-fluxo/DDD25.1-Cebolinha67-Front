import { MiniCalendar } from "@/app/components/home/MiniCalendar";

type Props = {
  params: Promise<{
    year: string;
    month: string;
  }>;
};

export default async function HomeMonthPage({ params }: Props) {
  const { year, month } = await params;
  return <MiniCalendar month={Number(month)} year={Number(year)} />;
}

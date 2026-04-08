import { MiniCalendar } from "@/app/components/home/MiniCalendar";

type Props = {
  params: Promise<{
    month: string;
    year: string;
  }>;
};

export default async function HomeMonthPage({ params }: Props) {
  const { month, year } = await params;
  return <MiniCalendar month={Number(month)} year={Number(year)} />;
}

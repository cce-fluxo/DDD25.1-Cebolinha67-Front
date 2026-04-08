import { FilterPanel } from "@/app/components/home/FilterPanel";
import { filterOptions } from "@/app/components/home/data";

export default function RootLayout({
  children,
  mini,
}: Readonly<{
  children: React.ReactNode;
  mini: React.ReactNode;
}>) {
  return (
    <main className="mx-auto grid w-full max-w-378 grid-cols-1 gap-4 px-3 py-4 lg:grid-cols-[355px_minmax(0,1fr)] lg:items-start">
      <aside className="space-y-4">
        {mini}
        <FilterPanel options={filterOptions} />
      </aside>
      {children}
    </main>
  );
}

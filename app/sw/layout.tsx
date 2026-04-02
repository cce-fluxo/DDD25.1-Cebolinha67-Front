import type { ReactNode } from "react";
import { MainHeader } from "../components/home/MainHeader";
import { navItems } from "../components/home/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-black font-sans antialiased">
      <MainHeader items={navItems} />
      {children}
    </div>
  );
}

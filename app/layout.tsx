import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SorriSync", // titulo que aparece na barra de navegação
  description: "Consultório",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="bg-indigo-300" >{children}</body>
    </html>
  );
}

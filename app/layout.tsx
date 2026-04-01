import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "SorrySync",
  description: "Protótipo Consultório de dentista",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato", // Nome da variável CSS
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="${lato.variable} h-full w-screen" lang="en">
      <body>{children}</body>
    </html>
  );
}

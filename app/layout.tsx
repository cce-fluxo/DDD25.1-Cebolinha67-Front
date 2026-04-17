import type { Metadata } from "next";
import { Lato } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "./components/Providers";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "SorrySync",
  description: "Prototipo de consultorio de dentista",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lato.variable} h-full`}>
      <body className="min-h-screen font-sans antialiased">
<<<<<<< HEAD
        <Providers>
          {children}
        </Providers>
=======
        <Providers>{children}</Providers>
>>>>>>> 0f81488832d5ac5a878b565140f71e3aab3d6e11
      </body>
    </html>
  );
}

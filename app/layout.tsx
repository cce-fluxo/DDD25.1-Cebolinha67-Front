import type { Metadata } from "next";
import { Lato } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from './providers';
import { AuthProvider } from "./context/AuthContext";

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
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

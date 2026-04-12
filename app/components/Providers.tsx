"use client"

// Esse componente existe porque o layout.tsx raiz é um Server Component.
// Server Components não podem usar hooks nem Context diretamente,
// então colocamos todos os Providers client-side aqui e importamos no layout.

import { ReactNode } from "react"
import { AuthProvider } from "@/app/context/AuthContext"

export function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}

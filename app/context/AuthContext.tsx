"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { login as loginApi, getMe, Dentista } from "@/lib/api"

// Decodifica o payload do JWT sem biblioteca externa
// O payload do JWT é só base64 — não é criptografado, só codificado
function decodeJwt(token: string): { id: number; email: string } {
  const payload = token.split(".")[1]
  return JSON.parse(atob(payload))
}

// ─── Tipos do Context ─────────────────────────────────────────────────────────

interface AuthContextType {
  usuario: Dentista | null      // dados completos do usuário logado (ou null)
  token: string | null         // JWT bruto (para uso avançado se precisar)
  carregando: boolean          // true enquanto verifica o token salvo no localStorage
  login: (email: string, senha: string) => Promise<void>
  logout: () => void
}

// ─── Criação do Context ───────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | null>(null)

// ─── Provider ────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Dentista | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(true)

  // Ao montar: lê o token do localStorage e busca os dados do usuário
  useEffect(() => {
    const tokenSalvo = localStorage.getItem("access_token")
    if (!tokenSalvo) {
      setCarregando(false)
      return
    }
    const { id } = decodeJwt(tokenSalvo)
    setToken(tokenSalvo)
    getMe(id)
      .then(setUsuario)
      .catch(() => {
        // Token inválido ou expirado — limpa tudo
        localStorage.removeItem("access_token")
      })
      .finally(() => setCarregando(false))
  }, [])

  async function login(email: string, senha: string) {
    const { access_token } = await loginApi(email, senha)
    localStorage.setItem("access_token", access_token)
    const { id } = decodeJwt(access_token)
    const dadosUsuario = await getMe(id)
    setToken(access_token)
    setUsuario(dadosUsuario)
  }

  function logout() {
    localStorage.removeItem("access_token")
    setToken(null)
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, token, carregando, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>")
  return ctx
}

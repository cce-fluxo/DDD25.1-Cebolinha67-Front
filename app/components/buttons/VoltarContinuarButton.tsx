"use client"
import { useRouter } from "next/navigation"
import PopUp from "../popups/popupContaCriada"
import { useState } from "react"

interface VoltarContinuarButtonProps {
  habilitado: boolean
  onContinuar?: () => void
}

export default function VoltarContinuarButton({ habilitado, onContinuar }: VoltarContinuarButtonProps) {
  const router = useRouter()
  const [mostrarPopup, setMostrarPopup] = useState(false)

  return (
    <div className="flex gap-3 mt-8 md:mt-12 justify-center w-full">
      <button
        className="bg-indigo-200 text-black px-6 py-2 rounded-xl font-medium cursor-pointer"
        onClick={() => router.back()}
      >
        Voltar
      </button>
      <button
        className={` cursor-pointer px-10 py-2 rounded-xl font-medium text-white transition-opacity ${habilitado ? "bg-indigo-500" : "bg-indigo-300 cursor-not-allowed"}`}
        onClick={() => { if (habilitado) onContinuar ? onContinuar() : router.push("/auth/cadastro/crie-sua-senha") }}
        disabled={!habilitado}
      >
        Continuar
      </button>

    </div>
  )
}

// adicionei a prop onContinuar pra executar código antes de navegar 
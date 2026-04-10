"use client"
import { useRouter } from "next/navigation"

interface VoltarContinuarButtonProps {
  habilitado: boolean
}

export default function VoltarContinuarButton({ habilitado }: VoltarContinuarButtonProps) {
  const router = useRouter()

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
        onClick={() => habilitado && router.push("/auth/cadastro/crie-sua-senha")}
        disabled={!habilitado}
      >
        Continuar
      </button>
    </div>
  )
}
"use client"
import { useRouter } from "next/navigation"

interface CriarContaCancelarButtonProps {
  habilitado: boolean
}

export default function CriarContaCancelarButton({ habilitado }: CriarContaCancelarButtonProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3 mt-8 md:mt-8 justify-center items-center w-full">
      <button 
      onClick={() => router.push("/sw/home")}
        className={` cursor-pointer py-2 rounded-xl w-40 text-white transition-opacity ${habilitado ? "bg-indigo-500" : "bg-indigo-300 cursor-not-allowed"}`}
        disabled={!habilitado}
      >
        Criar Conta
      </button>
      <button 
        className="bg-indigo-200 text-black py-2 rounded-xl w-40 cursor-pointer"
        onClick={() => router.back()}
      >
        Cancelar
      </button>
    </div>
  )
}
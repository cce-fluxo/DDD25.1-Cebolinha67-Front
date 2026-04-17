"use client"
import { useRouter } from "next/navigation"
import PopUp from "../popups/popupContaCriada"

interface CriarContaCancelarButtonProps {
  habilitado: boolean
  onCriarConta?: () => void
}

export default function CriarContaCancelarButton({ habilitado, onCriarConta }: CriarContaCancelarButtonProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3 mt-8 md:mt-8 justify-center items-center w-full">
      <button
        onClick={() => { if (habilitado) onCriarConta?.() }}
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

    {/* botão de teste pro popup */}
      <button className="bg-indigo-200 text-black py-2 rounded-xl w-40 cursor-pointer" onClick={() =>router.push("/popups")}>
      </button>
    </div>
  )
}

// agora  a página de senha pode chamar a API quando clicar em "Criar Conta "
"use client"
import { useRouter } from "next/navigation"
import PopUp from "../popups/popUpEsqueciSenha";
import imagepopup from "../../../public/popupimage.png";
import Image from "next/image";
import { useState } from "react";


interface CriarContaCancelarButtonProps {
  habilitado: boolean
  onCriarConta?: () => void
}



export default function CriarContaCancelarButton({ habilitado, onCriarConta }: CriarContaCancelarButtonProps) {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false);

  async function handlecontinuar() {
      if (habilitado) {
        onCriarConta?.();  
      }
      setShowPopup(true);
    }
  return (
    <>
    <PopUp
      título="Conta criada com sucesso, Seja bem-vindo!"
      imagem={
        <Image
            src={imagepopup}           // you already imported this above!
            width={300}
            height={300}
            alt="Senha redefinida"
        />
      }
      BotaoTexto="Voltar para login"
      onPressBotao={() =>router.push("/")}
      isVisible={showPopup}
      toggleModal={() => router.push("/")}
    />
    <div className="flex flex-col gap-3 mt-8 md:mt-8 justify-center items-center w-full">
      <button
        onClick={handlecontinuar}
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
    </>
  )
}

// agora  a página de senha pode chamar a API quando clicar em "Criar Conta "
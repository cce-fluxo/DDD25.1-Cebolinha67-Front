import Image from "next/image";
import InputBox from "./components/InputBox";
import BotaoEntar from "./components/BotaoEntrar";
import ToggleLogin from "./components/ToggleLogin";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/*Barra de cabeçalho branca com a logo */}
      <div className="flex justify-center h-30 pt-6 pb-6 bg-white">
        {/*Logo SorrySync */}
        <Image
          src="/Logo.png"
          alt="Logo"
          width={300}
          height={150}
          className="h-full w-auto"
        />
      </div>
      {/* Parte principal da página */}
      <div className="flex justify-center items-center relative flex-1 h-full bg-[url('/Fundo.png')] bg-cover bg-center overflow-hidden">
        {/* Personagens do fundo */}
        <div className="absolute bottom-0 left-[6%] z-10 hidden md:block">
          <Image
            src="/MulherDentista.png"
            alt="mulher do fundo"
            width={330}
            height={630}
            className="h-auto w-54 lg:w-66"
          />
        </div>
        <div className="absolute bottom-0 right-[4%] z-10 hidden md:block">
          <Image
            src="/HomemNoPC.png"
            alt="Personagem da direita"
            width={510}
            height={630}
            className="h-auto w-104 lg:w-136"
            priority
          />
        </div>
        {/* Caixa centralizada */}
        <div className="absolute flex w-145.75 h-176.75 flex-col items-center gap-2.5 px-6 py-19.25 rounded-xl bg-white">
          {/* conteúdo da caixa */}
          <div className="flex w-145.75 flex-col items-center gap-15">
            {/* Título "Seja bem-vindo!"*/}
            <h1 className="text-center text-[24px] font-extrabold text-black font-(family-name:--font-lato)">
              Seja bem-vindo!
            </h1>
            {/* Funcionalidades do meio da caixo */}
            <div className="flex w-112.5 flex-col items-center gap-6.75">
              {/* Campos de email e senha */}
              <div className="flex flex-col items-start gap-4.5 self-stretch">
                <InputBox placeholder="E-mail" tipo="email" />
                <InputBox placeholder="Senha" tipo="password" />
              </div>
              {/* Lembrar acesso e esqueci senha */}
              <div className="flex justify-between items-center self-stretch">
                <ToggleLogin />
              </div>
            </div>
            {/* Botões da parte debaixo caixa */}
            <div className="flex w-57.5 flex-col items-start gap-4.5">
              <BotaoEntar texto="Entrar" cheio={true} />
              <BotaoEntar texto="Cadastrar" cheio={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import HeaderLogin from "./components/HeaderLogin";
import { CaixaLogin } from "./components/CaixaLogin";
import MulherDentista from "./components/MulherDentista";
import HomemNoPc from "./components/HomemNoPc";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/*Barra de cabeçalho branca com a logo */}
      <HeaderLogin />
      {/* Parte principal da página */}
      <div className="flex justify-center items-center relative flex-1 h-full bg-[url('/Fundo.png')] bg-cover bg-center overflow-hidden">
        {/* Caixa centralizada */}
        <CaixaLogin />
        {/* Personagens do fundo */}
        <MulherDentista />
        <HomemNoPc />
      </div>
    </div>
  );
}

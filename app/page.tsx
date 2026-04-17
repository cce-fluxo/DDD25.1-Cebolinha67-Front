import HeaderLogin from "./components/componentes-do-arthur/HeaderLogin";
import { CaixaLogin } from "./components/componentes-do-arthur/CaixaLogin";
import MulherDentista from "./components/componentes-do-arthur/MulherDentista";
import HomemNoPc from "./components/componentes-do-arthur/HomemNoPc";

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden">
      {/* Barra de cabecalho branca com a logo */}
      <HeaderLogin />

      {/* Parte principal da pagina */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[url('/Fundo.png')] bg-cover bg-center px-2 py-4 sm:px-6 md:px-10">
        {/* Caixa centralizada */}
        <div className="relative z-30 h-176.75 w-145.75 scale-[0.56] sm:scale-[0.7] md:scale-[0.82] lg:scale-100">
          <CaixaLogin />
        </div>

        {/* Personagens do fundo */}
        <MulherDentista />
        <HomemNoPc />
      </main>
    </div>
  );
}

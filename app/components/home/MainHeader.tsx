"use client"

import { useRouter } from "next/navigation";
import type { NavItem } from "./types";
import Home from '../../page';

type MainHeaderProps = {
  items: NavItem[];
};

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.7"
      stroke="currentColor"
      className="size-5 text-purple-500"
      aria-hidden="true"
    >
      <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

export function MainHeader({ items }: MainHeaderProps) {

  const router = useRouter()
  return (
    <div className="flex flex-row w-full h-[12vh] px-4 py-5 justify-start gap-[8vh] items-center bg-white">
        <button onClick={() => router.push("/")}><img src="/logo.png" alt="logo sorri sync" className="cursor-pointer h-[4vh]"></img></button> 
        <button onClick={()=> router.push("/sw/home")} className="cursor-pointer">Home</button>
        <button onClick={() => router.push("/sw/consulta/ver-consultas-realizadas")} className="cursor-pointer">Pacientes</button>
        <button onClick={() => router.push("/sw/perfil")} className="cursor-pointer">Perfil</button>
        <button onClick={() => router.push("/sw/postagem")} className="cursor-pointer">Postagem</button>
        <button onClick={() => router.push("")} className=" absolute right-[5vh] cursor-pointer"><BellIcon></BellIcon></button>
    </div>

  )
}

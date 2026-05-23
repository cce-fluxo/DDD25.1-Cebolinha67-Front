        "use client"

        import { useRouter } from "next/navigation"

        export default function HeaderSignIn(){

            const router = useRouter()
            return(

                <div className="flex w-full px-8 py-4 justify-start items-center bg-white border-b border-gray-300 gap-50">

                {/* Logo */}
                <img src="/SorriSyncLogo.png" alt="SorriSync" className="w-[6.5%] h-auto"></img>

                {/* Links da header */}

                <nav className="flex items-center gap-15">
                <button onClick={() => router.push("/sw/home")} className="text-black cursor-pointer font-medium">Início</button>
                 <button onClick={() => router.push("/sw/consulta/ver-consultas-realizadas")} className="bg-indigo-100 text-indigo-700 font-medium px-4 py-2 rounded-lg cursor-pointer">
                <img src="/homeicon.png" alt="pacientes" />
                </button>
                <button onClick={() => router.push("/sw/perfil")} className="text-black font-medium cursor-pointer">Perfil</button>
                <button onClick={() => router.push("/sw/postagem")} className="text-black font-medium cursor-pointer">Postagem</button>
                <button onClick={() => router.push("/sw/notificacoes")} className="absolute right-0 mr-10 -mt-2 cursor-pointer">
        <img src="/notifications.png" alt="notificações" />
    </button>
</nav>
                </div>
            )
        }
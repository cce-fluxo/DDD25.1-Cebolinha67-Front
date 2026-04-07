
export default function HeaderSignIn(){
    return(
        <div className="flex w-full px-8 py-4 justify-start items-center bg-white border-b border-gray-300 gap-50">

        {/* Logo */}
        <img src="/SorriSyncLogo.png" alt="SorriSync" className="w-[6.5%] h-auto"></img>

        {/* Links da header */}

        <nav className="flex items-center gap-15">
            <button className="text-black  cursor-pointer font-medium">Início</button>
            <button className="bg-indigo-100 text-indigo-700 font-medium px-4 py-2 rounded-lg cursor-pointer "><img src={"/homeicon.png"}></img></button>
            <button className="text-black font-medium cursor-pointer">Perfil</button>
            <button className="text-black font-medium cursor-pointer">Postagem</button>

            <button><img src="/notifications.png" alt="notificacoes" className="absolute right-0 mr-10 -mt-2 cursor-pointer"></img></button>
        </nav>
        </div>
    )
}
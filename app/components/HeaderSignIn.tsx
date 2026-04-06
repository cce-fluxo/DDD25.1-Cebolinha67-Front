export default function HeaderSignIn(){
    return(
        <div>
            {/* header com os componentes */}
            <div className="flex w-full h-10 md:h-24 px-5 py-8.5 justify-between items-center flex-row  bg-white relative">
                <img src={"/SorriSyncLogo.png"} alt="SorriSync" className="w-24 md:w-28 h-auto"></img>
                <p className="flex">Inicio</p>
                <p>Pacientes</p>
                <p>Perfil</p>
                <p>Postagem</p>
            </div>
        </div>
    )
}
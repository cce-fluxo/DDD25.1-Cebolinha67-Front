export default function BoxSelecionouPaciente(){
    return(
        <div className="flex-1 w-[80%] h-[89.4vh] mt-4 bg-white rounded-2xl flex flex-col gap-2">
        
        {/* parte da esquerda - dados do paciente*/}

        <div className="flex flex-col gap-4 p-8 w-[50%]">
            {/* as vias de fato do código(conteúdo das divs) */}

            {/* eu mudo todo o bloco de elementos aqui */}
            <div className="flex items-center gap-4 mb-4">
            <img src={"/elipse.png"} alt="foto do paciente" className="w-[11vh] h-[11vh] rounded-full mt-12 ml-5"></img>
            <p className="text-xl font-semibold mt-[15vh]">Mariana Baroni</p> 
            </div>

            {/* dados da mulher */}

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">Nome completo</p>
                <p className="text-sm font-medium">Mariana Baroni da Silva Pereira</p>
            </div>

            {/* botar os dois amigos que vão ficar lado a lado na div */}

            <div className="flex gap-[22vh]">

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">CPF</p>
                <p className="text-sm font-medium">166.119.717-50</p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">RG</p>
                <p className="text-sm font-medium">26057340-7</p>
            </div>

            </div>

            {/* a outra dupla dinâmica */}

            <div className="flex gap-[20.2vh]">

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">Número de celular</p>
                <p className="text-sm font-medium">(21)99606-8009</p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">Número de telefone (fixo)</p>
                <p className="text-sm font-medium">-</p>
            </div>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">E-mail</p>
                <p className="text-sm font-medium">vitor67@gmail.com</p>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">Idade</p>
                <p className="text-sm font-medium">22 anos</p>
            </div>

            <button className="justify-center bg-indigo-200 py-4 w-[30vh] ml-[13vh] mt-5">
                <p className="text-medium text-blue-800">Enviar Mensagem</p>
            </button>
        </div>

        <div className="flex flex-col items-center justify-center -mt-[74vh] -mr-[30vh] ">
            <p className="text-medium font-medium text-indigo-700">Informações da Consulta</p>

            <div className="flex flex-col ">
            <p>eu</p>
        </div>
        </div>


        </div>
    )
}
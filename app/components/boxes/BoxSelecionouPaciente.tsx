export default function BoxSelecionouPaciente(){
    return(
        <div className="flex-1 w-[80%] h-[84.4vh] mt-[1.8vh] bg-white rounded-2xl flex flex-row">
        {/* dados do paciente- coluna esquerda */}
            <div className="flex flex-col gap-4 p-8 w-[50%]">
                <div className="flex items-center gap-4 mb-4">
                    <img src="/elipse.png" alt="foto do paciente" className="w-[11vh] h-[11vh] rounded-full mt-12 ml-5" />
                    <p className="text-xl font-semibold mt-[15vh]">Mariana Baroni</p> 
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-gray-400 text-xs">Nome completo</p>
                    <p className="text-sm font-medium">Mariana Baroni da Silva Pereira</p>
                </div>

                <div className="flex gap-[21vh]">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-400 text-xs">CPF</p>
                        <p className="text-sm font-medium">166.119.717-50</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-400 text-xs">RG</p>
                        <p className="text-sm font-medium">26057340-7</p>
                    </div>
                </div>

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

            {/* divisor */}
            <div className="w-px bg-gray-200 my-8" />

            {/* coluna direita */}
            <div className="flex flex-col gap-4 p-8 w-[50%] mt-[8vh]">
                <p className="text-medium font-medium text-indigo-700">Informações da Consulta</p>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-400">Profissional</p>
                    <p className="text-sm font-medium">Dr.Clara Guedes</p>
                </div>

                {/* duplinha dinâmica data e hora */}
                <div className="flex gap-[20.2vh]">
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-gray-400">Data</p>
                        <p className="text-sm font-medium">23/09/2024</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-gray-400">Hora</p>
                        <p className="text-sm font-medium">9:00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-400">Tipo de Consulta</p>
                    <p className="text-sm font-medium">Particular</p>
                </div>

                {/* linha horizontal de break */}
                <div className="w-full h-px bg-gray-200 my-4" />

                <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-400">Descrição do paciente</p>
                    <p className="text-sm font-medium">descricao</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-400">Tipo da consulta</p>
                    <p className="text-sm font-medium">Peridontia</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-medium font-bold text-indigo-700">Documentos</p>
                </div>

                {/* os três patetas (documentos)*/}

                <div className="flex flex-row gap-[2vh]">
                    <button className="flex flex-row items-center gap-2 bg-white border-2 border-gray-300 h-[4vh] w-[12vh] px-2 py-3 justify-center rounded-lg">
                        <img src="/inventory.png" alt="atestado" className="w-[2vh] h-[2vh]" />
                        <p className="text-xs text-gray-500 font-bold">Atestado</p>
                    </button>

                    <button className="flex flex-row items-center gap-2 bg-white border-2 border-gray-300 h-[4vh] w-[20vh] px-2 py-3 justify-center rounded-lg">
                        <img src="/download.png" alt="baixar laudo médico" className="w-[2vh] h-[2vh]" />
                        <p className="text-xs text-gray-500 font-bold">Baixar laudo médico</p>
                    </button>

                    <button className="flex flex-row items-center gap-2 bg-indigo-100 border-2 border-gray-300 h-[4vh] w-[10vh] px-2 py-3 justify-center rounded-lg">
                        <img src="/border_color.png" alt="Editar dados" className="w-[2vh] h-[2vh]" />
                        <p className="text-xs text-indigo-700 font-bold">Editar</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
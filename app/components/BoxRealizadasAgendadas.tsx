    export default function BoxRealizadasAgendadas(){
        return(
            <div>
                <div className="p-4">
                {/* o retangulao de realizar e agendar */}
                <div className="flex flex-col w-90 h-150 gap-12.5 p-4 bg-white rounded-2xl">

                {/* agendadas/realizadas*/}
                <div className="flex justify-center items-center gap-15 mb-4 pb-4 border-b border-gray-400">
                    <button className="text-indigo-800 font-medium">
                        Realizadas
                    </button>
                    <button className="text-gray-400 font-medium">
                        Agendadas
                    </button>
                </div>

                    {/* simulando a dropdown bar */}

                    <div className="flex justify-between items-center w-40 border border-black rounded-full px-4 py-2 -mt-10 text-sm">
                        <span className="text-gray-500 font-medium">Todas</span>
                        <span >▼</span>
                    </div>

                    {/* scroll bar */}

                    <div className="h-150 overflow-y-scroll scrollbar scrollbar-thumb-indigo-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        {/* as caixas dos pacientes*/}
                        <div className=" flex flex-col gap-2.5">
                        <div className="flex p-5 h-30 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                        <div className="flex p-5 h-30 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                        <div className="flex p-5 h-30 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                        <div className="flex p-5 h-30 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white rounded-2xl border-gray-400"></div>
                        <div className="flex p-5 h-30 justify-center items-center gap-2.5 self-stretch border-r-2.5 border bg-white border-gray-400 rounded-2xl "></div> 
                        </div>  
                    </div>

                </div>    
                </div>   
                </div>
        )
    }
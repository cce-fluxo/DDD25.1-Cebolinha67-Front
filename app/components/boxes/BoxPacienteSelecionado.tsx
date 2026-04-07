export default function BoxPacienteSelecionado(){
    return(
        <div className="flex-1 w-[80%] h-[91vh] mt-4 bg-white rounded-2xl flex items-center justify-center flex-col gap-2">
            <img src="/sorriso.png" alt="sorriso" className="max-w-[40%]" />
            <p className="font-medium  text-gray-600 ">Você ainda não selecionou nenhum paciente...</p>
        </div>
    )
}
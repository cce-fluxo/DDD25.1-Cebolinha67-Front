export default function CriarContaCancelarButton(){
    return (
        <div className="flex flex-col gap-3 mt-8 md:mt-8 justify-center items-center w-full">
            <button className="bg-indigo-500 text-white py-2 rounded-xl w-40">Criar Conta</button>
            <button className="bg-indigo-200 text-black py-2 rounded-xl w-40">Cancelar</button>
        </div>
    )
}
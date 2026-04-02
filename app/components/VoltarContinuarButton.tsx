export default function VoltarContinuarButton(){
    return(
        <div className="flex gap-3 mt-16.5 justify-center"> {/* pra separar o botão de voltar e continuar das input boxes */}
            <button className="bg-indigo-200 text-black px-6 py-2 rounded-xl font-medium">Voltar</button>
            <button className="bg-indigo-500 text-white px-10 py-2 rounded-xl font-medium">Continuar</button>
        </div>
    )
}
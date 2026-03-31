export default function CadastroBox({children}: {children: React.ReactNode}){
    return(
        <div className="mb-40">
            <div className="bg-white rounded-3xl p-8 w-110 h-141 text-black text-center font-bold">
                <p className="mt-7">Crie sua nova conta</p>
                {children}
            </div>
        </div>
    )
}
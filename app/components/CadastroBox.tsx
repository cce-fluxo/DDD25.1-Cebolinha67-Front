export default function CadastroBox({children}: {children: React.ReactNode}){
    return(
        <div className="mt-20 mb-10">
        <div className="flex w-145.75 h-176.75 px-19.25 py-6 flex-col align-middle gap-2.5 bg-white">
                <p className="mt-7">Crie sua nova conta</p>
                {children}
            </div>
        </div>
    )
}
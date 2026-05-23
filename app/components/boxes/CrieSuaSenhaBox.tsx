export default function CrieSuaSenhaBox({children}: {children: React.ReactNode})
{     
    return(        
        <div>            
            {/* caixa do crie sua senha */}             
            <div className="flex flex-col w-110 h-100 -mt-40 px-19.25 py-6 align-center justify-center gap-10 border-white rounded-2xl bg-white">
                {children}             
            </div>        
        </div>     
    ) 
}
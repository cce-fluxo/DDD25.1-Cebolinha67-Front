import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["700"] })

export default function CadastroBox({children}: {children: React.ReactNode}){
    return(
        <div className="flex justify-center items-start mt-20 mb-10">
            <div className="flex w-145.75 h-176.75 px-19.25 py-6 flex-col items-center bg-white">
               <p className={`absolute w-full left-1 mt-10 self-stretch text-center text-black leading-normal font-bold text-[20px] ${lato.className}`}>
                    Crie sua nova conta</p>
                <div className="flex flex-col gap-4 w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
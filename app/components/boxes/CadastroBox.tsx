import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["700"] })

export default function CadastroBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-start mt-10 mb-10 w-full px-4">
      <div className="flex w-full max-w-lg min-h-fit px-6 py-8 flex-col items-center bg-white rounded-2xl">
        <p className={`text-center text-black font-bold text-xl mb-6 ${lato.className}`}>
          Crie sua nova conta
        </p>
        <div className="flex flex-col gap-4 w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
import BackgroundSignOut from "@/app/components/BackgroundSignOut";
import CriarContaCancelarButton from "@/app/components/CriarContaCancelarButton";
import CrieSuaSenhaBox from "@/app/components/CrieSuaSenhaBox";
import HeaderSignOut from "@/app/components/HeaderSignOut";
import InputBar from "@/app/components/InputBar";

export default function CrieSuaSenha(){
    return (
        <div>
            <HeaderSignOut></HeaderSignOut>
            <BackgroundSignOut>
                    <div>
                    <CrieSuaSenhaBox>
                    <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-center items-center gap-1 mt-5">
                        <div className="">
                        <p className="text-black font-bold -mt-8">Crie sua</p>
                        </div>
                        <div className="text-indigo-500 font-bold font-lato -mt-10">
                            <p>senha</p>
                        </div>
                    </div>
                    <InputBar type="text" placeholder="Senha" />
                    <InputBar type="text" placeholder="Confirme sua senha"/>

                    <CriarContaCancelarButton></CriarContaCancelarButton>
                    </div>
                    </CrieSuaSenhaBox>
                    </div>
            </BackgroundSignOut>
        </div>
    )
} // lembrar que eu fiz esse endpoint novo, vou ter que mudar coisas no back 
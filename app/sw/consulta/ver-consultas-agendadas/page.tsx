import BoxRealizadasAgendadas from "@/app/components/boxes/BoxRealizadasAgendadas";
import BoxSelecionouPaciente from "@/app/components/boxes/BoxSelecionouPaciente";
import HeaderSignIn from "@/app/components/headers-use-as-da-home-nao-essas/HeaderSignIn";

export default function VerConsultasAgendadas(){
    return(
        <div className="bg-gray-200 h-full w-full">
            <HeaderSignIn></HeaderSignIn>
            <div className="flex gap-4 p-4">
                <BoxRealizadasAgendadas abaAtiva="realizadas"></BoxRealizadasAgendadas>
                <BoxSelecionouPaciente></BoxSelecionouPaciente>
            </div>
        </div>
    )
}
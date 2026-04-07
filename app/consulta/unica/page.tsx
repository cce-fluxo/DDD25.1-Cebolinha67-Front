import BoxRealizadasAgendadas from "@/app/components/BoxRealizadasAgendadas";
import BoxSelecionouPaciente from "@/app/components/BoxSelecionouPaciente";
import HeaderSignIn from "@/app/components/HeaderSignIn";

export default function ConsultaUnica(){
    return (
        <div className="bg-gray-200 h-full w-screen">
            <HeaderSignIn></HeaderSignIn>
            <div className="flex gap-4 p-4">
                <BoxRealizadasAgendadas></BoxRealizadasAgendadas>
                <BoxSelecionouPaciente></BoxSelecionouPaciente>
            </div>

        </div>
    )
}
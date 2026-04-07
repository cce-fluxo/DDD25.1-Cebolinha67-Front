import BoxPacienteSelecionado from "@/app/components/boxes/BoxPacienteSelecionado";
import BoxRealizadasAgendadas from "@/app/components/boxes/BoxRealizadasAgendadas";
import HeaderSignIn from "@/app/components/headers/HeaderSignIn";

export default function ConsultaRealizada(){
    return (
        <div className="bg-gray-200 h-full">
            <HeaderSignIn />
            <div className="flex gap-4 p-4">
                <BoxRealizadasAgendadas />
                <BoxPacienteSelecionado />
            </div>
        </div>
    )
}
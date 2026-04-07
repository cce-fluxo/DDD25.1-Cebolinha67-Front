import BoxPacienteSelecionado from "@/app/components/BoxPacienteSelecionado";
import BoxRealizadasAgendadas from "@/app/components/BoxRealizadasAgendadas";
import HeaderSignIn from "@/app/components/HeaderSignIn";

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
import BoxRealizadasAgendadas from "@/app/components/BoxRealizadasAgendadas";
import HeaderSignIn from "@/app/components/HeaderSignIn";

export default function ConsultaRealizada(){
    return (
        <div className="bg-gray-200">
            <HeaderSignIn></HeaderSignIn>
            <BoxRealizadasAgendadas></BoxRealizadasAgendadas>
        </div>
    )
}   
interface BotaoVoltarProps {
  onClick?: () => void;
}


export default function BotaoVoltar(props: BotaoVoltarProps){
    return (
        <button className= "flex w-full items-center justify-center gap-2.5 px-5 py-2.75 rounded-[10px] text-[18px] font-medium font-lato bg-gray-300" onClick={props.onClick}>Voltar</button>
    )
}
interface BotaoEntrarProps {
  texto: string;
  cheio: boolean;
  onClick?: () => void;
}

export default function BotaoEntrar(props: BotaoEntrarProps) {
  const classAdd = props.cheio
    ? "bg-[#5754DE] text-white"
    : "bg-white text-[#5754DE] border border-[#5754DE]";
  const classCompleto = ` cursor-pointer flex w-full items-center justify-center gap-2.5 px-5 py-2.75 rounded-[10px] text-[18px] font-medium font-lato ${classAdd}`;

  return (
    <>
      <button className={classCompleto} onClick={props.onClick}>{props.texto}</button>
    </>
  );
}

interface InputBoxProps {
  placeholder: string;
  tipo: Tipo;
  visibilidade?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Tipo = "email" | "password" | "string";

export default function InputBox(props: InputBoxProps) {
  return (
    <>
      <input
        className="flex justify-between items-center w-full px-5 py-3.5 rounded-lg border border-gray-400 text-[18px] font-medium font-lato placeholder:text-[#B5B5B5]"
        type={props.tipo}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

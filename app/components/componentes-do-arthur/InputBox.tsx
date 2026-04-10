interface InputBoxProps {
  placeholder: string;
  tipo: Tipo;
  visibilidade?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}

type Tipo = "email" | "password";

export default function InputBox(props: InputBoxProps) {
  return (
    <>
      <input
        className="flex justify-between items-center w-full px-5 py-3.5 rounded-lg border border-gray-400 text-[18px] font-medium font-lato placeholder:text-[#B5B5B5]"
        type={props.tipo}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </>
  );
}

// passo 4 da integração: adicionado value e onChange para o input de login funcionar como um componente controlado 
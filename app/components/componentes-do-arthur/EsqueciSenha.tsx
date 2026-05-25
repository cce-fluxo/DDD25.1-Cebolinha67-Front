import Link from "next/link";

export default function EsqueciSenha() {
  return (
    <div className="text-right">
      <Link
        href="http://localhost:3000/esqueciSenha"
        className="text-[#5754DE] text-[15px] font-lato font-extrabold"
      >
        Esqueci minha senha
      </Link>
    </div>
  );
}

import Image from "next/image";

export default function MulherDentista() {
  return (
    <div className="absolute bottom-0 left-[6%] z-10 hidden md:block">
      <Image
        src="/MulherDentista.png"
        alt="mulher do fundo"
        width={330}
        height={630}
        className="h-auto w-54 lg:w-66"
      />
    </div>
  );
}

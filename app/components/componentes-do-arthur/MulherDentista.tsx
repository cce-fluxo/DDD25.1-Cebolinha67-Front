import Image from "next/image";

export default function MulherDentista() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-[2%] z-10">
      <Image
        src="/MulherDentista.png"
        alt="mulher do fundo"
        width={330}
        height={630}
        className="h-auto w-[clamp(110px,18vw,264px)]"
      />
    </div>
  );
}

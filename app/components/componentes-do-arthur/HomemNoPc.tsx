import Image from "next/image";

export default function HomemNoPc() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-[2%] z-10">
      <Image
        src="/HomemNoPC.png"
        alt="Personagem da direita"
        width={510}
        height={630}
        className="h-auto w-[clamp(170px,33vw,544px)]"
        priority
      />
    </div>
  );
}

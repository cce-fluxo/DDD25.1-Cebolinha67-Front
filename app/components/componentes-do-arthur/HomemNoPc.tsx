import Image from "next/image";

export default function HeaderLogin() {
  return (
    <div className="absolute bottom-0 right-[4%] z-10 hidden md:block">
      <Image
        src="/HomemNoPC.png"
        alt="Personagem da direita"
        width={510}
        height={630}
        className="h-auto w-104 lg:w-136"
        priority
      />
    </div>
  );
}

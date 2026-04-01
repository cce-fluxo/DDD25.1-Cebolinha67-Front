import Image from "next/image";

export default function HeaderSignOut() {
  return (
    <div className="flex justify-center h-[12.5%] pt-6 pb-6 bg-white">
      {/*Logo SorrySync */}
      <Image
        src="/SorriSyncLogo.png"
        alt="Logo"
        width={300}
        height={150}
        className="h-full w-auto"  // melhorar essa header do arthur (aka botar mais coisas no tailwind)
      />
    </div>
  );
}

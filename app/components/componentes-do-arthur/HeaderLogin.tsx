import Image from "next/image";

export default function HeaderLogin() {
  return (
    <div className="flex justify-center h-[12.5%] pt-6 pb-6 bg-white w-full">
      {/*Logo SorrySync */}
      <Image
        src="/Logo.png"
        alt="Logo"
        width={300}
        height={150}
        className="h-full w-auto"
      />
    </div>
  );
}

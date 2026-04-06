import Image from "next/image";

export default function HeaderInicio() {
    return (
        <div className="flex justify-baseline h-[12.5%] pt-6 pb-6 bg-white w-full"> {/* Atrapalha mt esse w-full? Me ajuda na header de esqueci minha senha/}
            {/*Logo SorrySync */}
            <Image
                src="/Logo.png"
                alt="Logo"
                width={300}
                height={150}
                className="h-full w-auto"
            />
        </div>
    )
}
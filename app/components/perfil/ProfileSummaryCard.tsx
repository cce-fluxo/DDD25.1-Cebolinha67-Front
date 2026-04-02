import Image from "next/image";
import { PencilBadgeIcon } from "./icons";
import type { ProfileSummaryData } from "./types";

type ProfileSummaryCardProps = {
  summary: ProfileSummaryData;
};

export function ProfileSummaryCard({ summary }: ProfileSummaryCardProps) {
  return (
    <section className="rounded-[15px] border border-[#B5B5B5] bg-white px-8 py-6.5">
      {/* Profile Info */}
      <div className="flex items-center gap-6.5">
        {/* Profile picture and edit button */}
        <div className="relative">
          {/* Profile picture */}
          <Image
            src={summary.avatarSrc}
            alt={summary.avatarAlt}
            width={64}
            height={64}
            className="size-16 rounded-full border-2 border-[#CCCBFF] object-cover"
            priority
          />
          {/* Edit button */}
          <button
            type="button"
            aria-label="Editar foto de perfil"
            className="absolute -bottom-0.75 -right-0.5 grid size-5 place-items-center rounded bg-white text-[#5754DE] transition-colors hover:bg-[#d5d3ff]"
          >
            <PencilBadgeIcon className="size-5" />
          </button>
        </div>

        {/* Profile Name */}
        <h1 className="text-[20px] leading-normal text-black">
          {/* Profile prefix */}
          <span className="font-bold text-[#696969]">
            {summary.titlePrefix}
          </span>
          <span> </span>
          {/* Profile actual name */}
          <span>{summary.name}</span>
        </h1>
      </div>

      {/* Logout Button (Sair) */}
      <div className="mt-6.5 pl-15.25">
        <button
          type="button"
          className="inline-flex h-10 w-22 items-center justify-center rounded-[5px] bg-[#E1E0FF] text-base font-bold text-[#5754DE] transition-colors hover:bg-[#d5d3ff]"
        >
          Sair
        </button>
      </div>
    </section>
  );
}

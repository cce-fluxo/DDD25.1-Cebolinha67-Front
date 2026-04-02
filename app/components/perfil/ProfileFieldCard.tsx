import { EditSquareIcon } from "./icons";
import type { ProfileField } from "./types";

type ProfileFieldCardProps = {
  field: ProfileField;
};

// monta cada card de dados
export function ProfileFieldCard({ field }: ProfileFieldCardProps) {
  return (
    <article className="flex h-16.75 items-center justify-between rounded-[5px] border border-[#696969] bg-white px-5 py-1.5">
      <div className="min-w-0">
        <p className="text-xs leading-normal text-[#696969]">{field.label}</p>
        <p className="mt-2.25 truncate text-sm leading-normal text-black">
          {field.value}
        </p>
      </div>

      <button
        type="button"
        aria-label={`Editar ${field.editLabel ?? field.label.toLowerCase()}`}
        className="grid size-6.25 shrink-0 place-items-center rounded text-[#5754DE] transition-colors hover:bg-[#efefff]"
      >
        <EditSquareIcon className="size-4.75" />
      </button>
    </article>
  );
}

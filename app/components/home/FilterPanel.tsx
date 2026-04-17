import type { FilterOption } from "./types";

type FilterPanelProps = {
  options: FilterOption[];
};

export function FilterPanel({ options }: FilterPanelProps) {
  return (
    <section className="rounded-[15px] border border-[#B5B5B5] bg-white px-5 py-6">
      <h2 className="text-[30px] font-bold leading-none text-black sm:text-[32px]">
        Filtrar por:
      </h2>

      <fieldset className="mt-6">
        <legend className="text-base font-bold text-black">
          Tipo de consulta
        </legend>

        <div className="mt-3 space-y-3">
          {options.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex cursor-pointer items-center gap-3 text-base"
            >
              <input
                id={option.id}
                name={option.id}
                type="checkbox"
                className="size-4 rounded-xs border-[#5754DE] text-[#5754DE] focus:ring-[#5754DE]"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </section>
  );
}

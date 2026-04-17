import { ProfileFieldCard } from "./ProfileFieldCard";
import type { ProfileSectionData } from "./types";

type ProfileSectionProps = {
  section: ProfileSectionData;
};
// monta a estrutura de cada seção
export function ProfileSection({ section }: ProfileSectionProps) {
  return (
    <section aria-labelledby={section.id}>
      <h2 id={section.id} className="text-[15px] font-bold text-[#5754DE]">
        {section.title}
      </h2>

      <div className="mt-3.75 space-y-5">
        {section.rows.map((row) => (
          // checa para possivel linha com duas caixas de dados
          <div
            key={row.id}
            className={
              row.columns === 2
                ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
                : undefined
            }
          >
            {row.fields.map((field) => (
              <ProfileFieldCard key={field.id} field={field} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

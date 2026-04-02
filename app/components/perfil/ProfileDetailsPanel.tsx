import { ProfileSection } from "./ProfileSection";
import type { ProfileDetailsColumn } from "./types";

type ProfileDetailsPanelProps = {
  columns: ProfileDetailsColumn[];
};

export function ProfileDetailsPanel({ columns }: ProfileDetailsPanelProps) {
  return (
    <section
      aria-label="Dados cadastrais"
      className="rounded-[15px] border border-[#B5B5B5] bg-white p-4 sm:p-6 lg:p-7.5"
    >
      {/* cria e estrutura global do painel das diferentes areas de dados */}
      <div className="grid gap-5.5 lg:grid-cols-2 lg:items-start">
        {columns.map((column) => (
          <div key={column.id} className="space-y-7.5">
            {column.sections.map((section) => (
              <ProfileSection key={section.id} section={section} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

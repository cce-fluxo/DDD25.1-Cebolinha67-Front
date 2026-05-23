import { ProfileDetailsPanel } from "@/app/components/perfil/ProfileDetailsPanel";
import { ProfileMenuCard } from "@/app/components/perfil/ProfileMenuCard";
import { ProfileSummaryCard } from "@/app/components/perfil/ProfileSummaryCard";
import {
  profileDetailColumns,
  profileMenuItems,
  profileSummary,
} from "@/app/components/perfil/data";

export default function PerfilPage() {
  return (
    <main className="mx-auto w-full max-w-378 px-3.5 py-5.5">
      <div className="grid gap-3 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
        {/* Sidebar with profile summary and menu */}
        <aside className="space-y-4">
          {/* Profile summary */}
          <ProfileSummaryCard summary={profileSummary} />
          {/* Profile menu */}
          <ProfileMenuCard items={profileMenuItems} />
        </aside>

        {/* Main content with profile details (only the dados cadastrais option) */}
        <ProfileDetailsPanel columns={profileDetailColumns} />
      </div>
    </main>
  );
}

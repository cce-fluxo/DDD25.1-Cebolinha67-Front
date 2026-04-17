import type { ComponentType } from "react";
import { ClipboardIcon, HelpCircleIcon } from "../icons";
import type { ProfileMenuIcon, ProfileMenuItem } from "./types";

type ProfileMenuCardProps = {
  items: ProfileMenuItem[];
};

{
  /* Faz um Map entre o tipo de icone e o Icon relativo a ele */
}
const MENU_ICON: Record<
  ProfileMenuIcon,
  ComponentType<{ className?: string }>
> = {
  clipboard: ClipboardIcon,
  help: HelpCircleIcon,
};

export function ProfileMenuCard({ items }: ProfileMenuCardProps) {
  return (
    <nav
      aria-label="Navegação de perfil"
      className="overflow-hidden rounded-[15px] border border-[#B5B5B5] bg-white py-7"
    >
      <ul>
        {/* lista todas as opcoes de menus dentro da pagina de perfil */}
        {items.map((item) => {
          // Pega o Icon correspondente ao item do menu usando o Map definido acima
          const Icon = MENU_ICON[item.icon];
          // Verifica se o item do menu é o ativo para aplicar estilos diferentes
          const isActive = Boolean(item.isActive);

          return (
            <li key={item.id}>
              {/* Butao para o item do menu */}
              <button
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={`flex h-14.25 w-full items-center gap-5 px-5 text-left ${isActive ? "bg-[#F2F2F2] text-[#5754DE]" : "bg-white text-black hover:bg-[#f8f8f8]"}`}
              >
                {/* Icon e nome da opcao */}
                <Icon className="size-7 shrink-0" />
                <span
                  className={
                    isActive ? "text-sm font-bold" : "text-sm font-medium"
                  }
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

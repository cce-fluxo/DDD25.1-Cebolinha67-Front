import Image from "next/image";
import type { NavItem } from "./types";
import { MainHeaderNav } from "./MainHeaderNav";

type MainHeaderProps = {
  items: NavItem[];
};

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.7"
      stroke="currentColor"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

export function MainHeader({ items }: MainHeaderProps) {
  return (
    <header className="h-[12vh] max-h-30 border-b border-[#696969] bg-white">
      <div className="mx-auto flex h-full w-full items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-3 sm:gap-6 lg:gap-12">
          <Image
            src="/logo.png"
            alt="Logo do SorrySync"
            width={250}
            height={66}
            className="h-[56%] w-auto shrink-0"
            priority
          />

          <nav
            aria-label="Menu principal"
            className="max-w-full overflow-x-auto"
          >
            <MainHeaderNav items={items} />
          </nav>
        </div>

        <button
          type="button"
          aria-label="Notificacoes"
          className="grid size-8 shrink-0 place-items-center rounded-full text-[#5754DE] transition-colors hover:bg-[#efefff] sm:size-9"
        >
          <BellIcon />
        </button>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "./types";

type MainHeaderNavProps = {
  items: NavItem[];
};

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4.5"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 10.75 12 3l9 7.75V21h-6.5v-5.5h-5V21H3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isActivePath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinkItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = isActivePath(pathname, item.href);
  const activeClasses = "bg-[#E1E0FF] text-[#5754DE] font-black";
  const inactiveClasses = "text-black font-semibold hover:bg-[#f4f3ff]";

  return (
    <li>
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={`inline-flex h-9 items-center justify-center rounded-[10px] px-4 text-sm transition-colors sm:h-10 sm:px-5 sm:text-base ${isActive ? activeClasses : inactiveClasses}`}
      >
        {item.icon === "home" ? (
          <span className="inline-flex items-center gap-1">
            <HomeIcon />
            {item.label}
          </span>
        ) : (
          item.label
        )}
      </Link>
    </li>
  );
}

export function MainHeaderNav({ items }: MainHeaderNavProps) {
  const pathname = usePathname();

  return (
    <ul className="flex min-w-max items-center gap-1 sm:gap-2">
      {items.map((item) => (
        <NavLinkItem key={item.href} item={item} pathname={pathname} />
      ))}
    </ul>
  );
}

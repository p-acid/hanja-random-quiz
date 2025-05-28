"use client";

import { CircleUser, Home, Search, SquarePen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { PAGE_ROUTES } from "@/constants/page-routes";
import { cn } from "@/utils/cn";

const FOOTER_NAV_ITEMS: {
  name: string;
  icon: ReactNode;
  href: string;
  matcher: (pathname: string) => boolean;
}[] = [
  {
    name: "검색",
    icon: <Search className="size-5" />,
    href: PAGE_ROUTES.SEARCH,
    matcher: (pathname) => pathname === PAGE_ROUTES.SEARCH,
  },
  {
    name: "퀴즈",
    icon: <SquarePen className="size-5" />,
    href: PAGE_ROUTES.QUIZ,
    matcher: (pathname) => pathname.includes(PAGE_ROUTES.QUIZ),
  },
  {
    name: "홈",
    icon: <Home className="size-5" />,
    href: PAGE_ROUTES.HOME,
    matcher: (pathname) => pathname === PAGE_ROUTES.HOME,
  },
  {
    name: "내정보",
    icon: <CircleUser className="size-5" />,
    href: PAGE_ROUTES.MY_PAGE,
    matcher: (pathname) => pathname.includes(PAGE_ROUTES.MY_PAGE),
  },
];

export function FooterNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-base-200 border-base-300 text-base-content fixed bottom-0 left-1/2 flex h-20 w-full max-w-sm -translate-x-[50%] justify-around rounded-t-2xl border-t pt-2.5">
      {FOOTER_NAV_ITEMS.map(({ name, href, icon, matcher }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            "flex h-fit flex-col items-center justify-center gap-1 text-xs text-stone-400",
            {
              "text-white": matcher(pathname),
            },
          )}
        >
          {icon}
          <span className="text-xs">{name}</span>
        </Link>
      ))}
    </nav>
  );
}

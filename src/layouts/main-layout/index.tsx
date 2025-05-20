"use client";

import { PropsWithChildren } from "react";
import { FooterNav } from "./footer-nav";
import { cn } from "@/utils/cn";

export function MainLayout({ children }: PropsWithChildren) {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

  return (
    <div className={"mx-auto h-full w-full max-w-sm"}>
      <div
        className={cn(
          "scrollbar-hidden h-[calc(100dvh-4rem)] overflow-scroll",
          {
            "h-[calc(100dvh-5rem)]": isStandalone,
          },
        )}
      >
        {children}
      </div>
      <FooterNav />
    </div>
  );
}

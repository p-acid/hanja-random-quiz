import { PropsWithChildren } from "react";
import { FooterNav } from "./footer-nav";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto h-full w-full max-w-sm">
      <div className="scrollbar-hidden h-[calc(100dvh-5rem)] overflow-scroll">
        {children}
      </div>
      <FooterNav />
    </div>
  );
}

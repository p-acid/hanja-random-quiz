import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-base-100 flex h-full min-h-[100dvh] w-full justify-center">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}

"use client";

import { cn } from "@/utils/cn";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";
import { ContentProps, Drawer as VaulDrawer } from "vaul";

function Content({ className, children, ...props }: ContentProps) {
  return (
    <VaulDrawer.Portal>
      <VaulDrawer.Overlay className="fixed inset-0 bg-black/40" />
      <VaulDrawer.Content
        className="fixed bottom-0 left-1/2 h-fit w-full max-w-sm -translate-x-[50%]"
        {...props}
      >
        <div
          className={cn(
            "bg-base-100 border-base-200 rounded-t-2xl border-t px-6 pt-6 pb-10",
            className,
          )}
        >
          {children}
        </div>
      </VaulDrawer.Content>
    </VaulDrawer.Portal>
  );
}

function Title({ children }: PropsWithChildren) {
  return (
    <VaulDrawer.Title className="text-base-content mx-auto text-base font-semibold">
      {children}
    </VaulDrawer.Title>
  );
}

function Description({ children }: PropsWithChildren) {
  return (
    <VaulDrawer.Description className="text-base font-semibold text-zinc-400">
      {children}
    </VaulDrawer.Description>
  );
}

function Close() {
  return (
    <VaulDrawer.Close className="btn btn-square btn-ghost btn-md absolute top-3 right-3">
      <X className="size-5 text-zinc-400" />
    </VaulDrawer.Close>
  );
}

export const Drawer = {
  Root: VaulDrawer.Root,
  Trigger: VaulDrawer.Trigger,
  Content,
  Title,
  Description,
  Close,
};

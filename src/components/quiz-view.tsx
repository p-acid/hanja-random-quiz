import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export function QuizView({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-base-300 flex h-[240px] w-full items-center justify-center rounded-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

interface ChineseCharacterProps extends HTMLAttributes<HTMLDivElement> {
  word: string;
  reading: string;
}

export function ChineseCharacter({
  className,
  word,
  reading,
  ...props
}: ChineseCharacterProps) {
  return (
    <div
      className={cn(
        "bg-base-200 border-base-300 flex items-center gap-5 rounded-lg border p-3",
        className,
      )}
      {...props}
    >
      <div className="bg-base-300 flex size-12 flex-col items-center justify-center rounded-lg text-3xl">
        {word}
      </div>
      <p className="text-base-content text-lg font-semibold tracking-tight">
        {reading}
      </p>
    </div>
  );
}

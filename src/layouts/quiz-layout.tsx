import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { PAGE_ROUTES } from "@/constants/page-routes";

interface QuizLayoutProps extends PropsWithChildren {
  submittedQuizCount: number;
  totalQuizCount: number;
}

export function QuizLayout({
  submittedQuizCount,
  totalQuizCount,
  children,
}: QuizLayoutProps) {
  return (
    <main className="h-full">
      <div className="flex h-18 flex-col">
        <div className="relative flex h-full items-center justify-center text-lg font-bold">
          <Link
            href={PAGE_ROUTES.QUIZ}
            className="absolute top-1/2 left-4 -translate-y-[50%]"
          >
            <ChevronLeft className="size-6" />
          </Link>
          {submittedQuizCount + 1}/{totalQuizCount}
        </div>

        <div className="bg-base-300 h-1 w-full">
          <div
            style={{
              width: `${(submittedQuizCount / totalQuizCount) * 100}%`,
            }}
            className="bg-primary h-full transition-colors duration-200"
          />
        </div>
      </div>

      {children}
    </main>
  );
}

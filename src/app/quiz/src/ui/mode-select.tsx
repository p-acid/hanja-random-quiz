"use client";

import { HTMLAttributes, useState } from "react";
import { LucideIcon } from "lucide-react";

import { ValueOf } from "@/types/value-of";
import { cn } from "@/utils/cn";

import { QUIZ_MODE, QUIZ_MODE_LIST } from "../constants/quiz-mode";
import { useRouter, useSearchParams } from "next/navigation";
import { PAGE_ROUTES } from "@/constants/page-routes";
import { SEARCH_PARAM_KEYS } from "@/constants/search-params";

export function ModeSelect() {
  const [selectedMode, setSelectedMode] = useState<ValueOf<typeof QUIZ_MODE>>(
    QUIZ_MODE.FOUR_CHOICE,
  );

  const searchParams = useSearchParams();
  const { push } = useRouter();

  const isAnswerRevealed =
    searchParams.get(SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED) === "true";

  const selectMode = (newMode: ValueOf<typeof QUIZ_MODE>) => {
    setSelectedMode(newMode);
  };

  const startQuiz = () => {
    const routes = {
      [QUIZ_MODE.FOUR_CHOICE]: PAGE_ROUTES.FOUR_CHOICE_QUIZ,
      [QUIZ_MODE.SHORT_ANSWER]: PAGE_ROUTES.SHORT_ANSWER_QUIZ,
    };

    push(
      routes[selectedMode] +
        `?${SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED}=${isAnswerRevealed}`,
    );
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-3">
        {QUIZ_MODE_LIST.map(({ mode, ...props }) => (
          <QuizModeOption
            key={mode}
            onClick={() => selectMode(mode)}
            isSelected={mode === selectedMode}
            {...props}
          />
        ))}
      </div>

      <button className="btn btn-lg w-full" onClick={startQuiz}>
        시작하기
      </button>
    </div>
  );
}

interface QuizModeOptionProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
  isSelected?: boolean;
}

export function QuizModeOption({
  icon: Icon,
  title,
  description,
  isSelected,
  ...props
}: QuizModeOptionProps) {
  return (
    <div
      className={cn(
        "group bg-base-200 border-base-300 flex cursor-pointer gap-4 rounded-lg border p-4 transition-all duration-200 outline-none",
        {
          "bg-primary border-primary": isSelected,
        },
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-base-300 mt-0.5 h-fit w-fit rounded-md p-1.5 transition-colors duration-200",
          {
            "bg-base-content text-base-100": isSelected,
          },
        )}
      >
        <Icon className="size-3.5" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-semibold">{title}</p>
        <p
          className={cn("text- text-zinc-400 transition-colors duration-200", {
            "text-base-content": isSelected,
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

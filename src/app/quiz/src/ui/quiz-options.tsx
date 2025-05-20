"use client";

import useQuizOptions from "@/hooks/use-quiz-options";
import { cn } from "@/utils/cn";

export function QuizOptions() {
  const { isAnswerRevealed, toggleAnswerRevealed } = useQuizOptions();

  return (
    <div className="flex justify-end">
      <label
        className={cn("label gap-2.5 transition-colors duration-200", {
          "text-white": isAnswerRevealed,
        })}
      >
        정답 보기
        <input
          type="checkbox"
          className="toggle"
          checked={isAnswerRevealed}
          onChange={toggleAnswerRevealed}
        />
      </label>
    </div>
  );
}

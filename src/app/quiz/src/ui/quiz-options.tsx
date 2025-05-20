"use client";

import useQuizOptions from "@/hooks/use-quiz-options";

export function QuizOptions() {
  const { isAnswerRevealed, toggleAnswerRevealed } = useQuizOptions();

  return (
    <div className="flex justify-end">
      <label className="label gap-2.5">
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

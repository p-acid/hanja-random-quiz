"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

import { QuizView } from "@/components/quiz-view";
import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { PAGE_ROUTES } from "@/constants/page-routes";
import { QuizLayout } from "@/layouts/quiz-layout";

import { getShortAnswerQuiz } from "@/utils/get-short-answer-quiz";
import useQuizOptions from "@/hooks/use-quiz-options";
import { cn } from "@/utils/cn";
import useQuizAnswers from "@/hooks/use-quiz-answers";

export default function ShortAnswerPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isRevealed, setIsRevealed] = useState(false);

  const { push } = useRouter();

  const { isAnswerRevealed } = useQuizOptions();
  const { currentQuiz, submittedQuizzes, updateQuiz } = useQuizAnswers({
    generateQuiz: getShortAnswerQuiz,
  });

  const submitAnswer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!currentQuiz || !inputRef.current) return;

    const inputValue = inputRef.current.value;

    if (inputRef.current.value === "") {
      alert("정답을 입력해주세요");
      return;
    }

    inputRef.current.value = "";

    if (isAnswerRevealed) {
      setIsRevealed(true);

      setTimeout(() => {
        updateQuiz(inputValue);
        setIsRevealed(false);
      }, 1000);

      return;
    }

    updateQuiz(inputValue);
  };

  const submitResult = () => {
    push(PAGE_ROUTES.QUIZ_RESULT);
  };

  return (
    <QuizLayout
      submittedQuizCount={submittedQuizzes.length}
      totalQuizCount={CHINESE_CHARACTERS.length}
    >
      <div className="flex flex-col gap-16 p-6">
        <div className="flex flex-col gap-6">
          <QuizView className="flex-col gap-5 text-xl">
            <span className="text-9xl">{currentQuiz?.question}</span>
            <span
              className={cn(
                "font-semibold opacity-0 transition-opacity duration-200",
                {
                  "!opacity-100": isRevealed,
                },
              )}
            >
              {isRevealed ? currentQuiz?.answer : ""}
            </span>
          </QuizView>
          <form className="flex flex-col gap-3" onSubmit={submitAnswer}>
            <input
              ref={inputRef}
              type="text"
              autoFocus
              placeholder="정답을 입력해주세요"
              className="input-bordered input input-xl w-full px-4 text-lg"
            />
            <button
              type="submit"
              disabled={isRevealed}
              className="btn btn-lg w-full"
            >
              제출하기
            </button>
          </form>
        </div>

        <button
          type="button"
          className="btn btn-lg btn-primary"
          onClick={submitResult}
        >
          결과 확인하기
        </button>
      </div>
    </QuizLayout>
  );
}

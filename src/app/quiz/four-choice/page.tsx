"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { PAGE_ROUTES } from "@/constants/page-routes";
import { getFourChoiceQuiz } from "@/utils/get-four-choice-quiz";
import { QuizView } from "@/components/quiz-view";
import { QuizLayout } from "@/layouts/quiz-layout";
import { cn } from "@/utils/cn";
import useQuizOptions from "@/hooks/use-quiz-options";
import useQuizAnswers from "@/hooks/use-quiz-answers";

export default function FourChoicePage() {
  const [isRevealed, setIsRevealed] = useState(false);

  const { push } = useRouter();

  const { currentQuiz, submittedQuizzes, updateQuiz } = useQuizAnswers({
    generateQuiz: getFourChoiceQuiz,
  });
  const { isAnswerRevealed } = useQuizOptions();

  const submitAnswer = (submittedAnswer: string) => {
    if (!currentQuiz) return;

    if (isAnswerRevealed) {
      setIsRevealed(true);

      setTimeout(() => {
        updateQuiz(submittedAnswer);
        setIsRevealed(false);
      }, 1000);

      return;
    }

    updateQuiz(submittedAnswer);
  };

  const submitResult = () => {
    push(PAGE_ROUTES.QUIZ_RESULT);
  };

  return (
    <QuizLayout
      submittedQuizCount={submittedQuizzes.length}
      totalQuizCount={CHINESE_CHARACTERS.length}
    >
      <div className="flex flex-col gap-5 p-6">
        <div className="flex flex-col items-center gap-5">
          <QuizView className="bg-base-300 flex h-[240px] w-full items-center justify-center rounded-xl">
            <span className="text-9xl">{currentQuiz?.question}</span>
          </QuizView>
          <div className="grid w-full grid-cols-2 gap-4">
            {currentQuiz?.options.map((choice, idx) => (
              <button
                key={idx}
                disabled={isRevealed}
                className={cn(
                  "btn btn-xl border-base-300 h-16 w-full text-base transition-colors duration-200",
                  {
                    "!bg-success !text-base-content":
                      isRevealed && choice === currentQuiz.answer,
                  },
                )}
                onClick={() => submitAnswer(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-lg btn-primary" onClick={submitResult}>
          결과 확인하기
        </button>
      </div>
    </QuizLayout>
  );
}

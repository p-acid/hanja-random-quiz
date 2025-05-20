"use client";

import { useAtom } from "jotai";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { submittedQuizzesAtom } from "@/atoms/submitted-quizzes";
import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { PAGE_ROUTES } from "@/constants/page-routes";
import { FourChoiceQuiz } from "@/types/quiz";
import { getFourChoiceQuiz } from "@/utils/get-four-choice-quiz";

export default function FourChoicePage() {
  const [currentQuiz, setCurrentQuiz] = useState<FourChoiceQuiz>();

  const { push } = useRouter();

  const [submittedQuizzes, setSubmittedQuizzes] = useAtom(submittedQuizzesAtom);

  const submitAnswer = (submittedAnswer: string) => {
    if (!currentQuiz) return;

    setSubmittedQuizzes((prev) => [
      ...prev,
      {
        answer: { word: currentQuiz.question, reading: currentQuiz.answer },
        submittedAnswer,
      },
    ]);

    setCurrentQuiz(
      getFourChoiceQuiz([...submittedQuizzes.map((quiz) => quiz.answer.word)]),
    );
  };

  const submitResult = () => {
    push(PAGE_ROUTES.QUIZ_RESULT);
  };

  useEffect(() => {
    const newQuiz = getFourChoiceQuiz();
    if (newQuiz) {
      setCurrentQuiz(newQuiz);
    }
  }, []);

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
          {submittedQuizzes.length + 1}/{CHINESE_CHARACTERS.length}
        </div>

        <div className="bg-base-300 h-1 w-full">
          <div
            style={{
              width: `${(submittedQuizzes.length / CHINESE_CHARACTERS.length) * 100}%`,
            }}
            className="bg-primary h-full transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-16 p-6">
        <div className="flex flex-col items-center gap-5">
          <div className="bg-base-300 flex h-[240px] w-full items-center justify-center rounded-xl text-9xl">
            {currentQuiz?.question}
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
            {currentQuiz?.options.map((choice, idx) => (
              <button
                key={idx}
                className="btn btn-xl h-16 w-full text-base"
                onClick={() => submitAnswer(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-lg btn-primary" onClick={submitResult}>
          제출하기
        </button>
      </div>
    </main>
  );
}

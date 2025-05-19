"use client";

import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { FourChoiceQuiz } from "@/types/quiz";
import { getFourChoiceQuiz } from "@/utils/get-four-choice-quiz";
import { useEffect, useState } from "react";

export default function FourChoicePage() {
  const [quizes, setQuizes] = useState<FourChoiceQuiz[]>([]);

  const currentQuiz = quizes[quizes.length - 1];

  const submitAnswer = (submittedAnswer: string) => {
    setQuizes((prev) => {
      const targetQuiz = prev[prev.length - 1];
      const submittedQuiz = { ...targetQuiz, submittedAnswer };
      return [
        ...prev.slice(0, prev.length - 1),
        submittedQuiz,
        getFourChoiceQuiz(),
      ];
    });
  };

  console.log(quizes);

  useEffect(() => {
    const newQuiz = getFourChoiceQuiz();
    if (newQuiz) {
      setQuizes([newQuiz]);
    }
  }, []);

  return (
    <main className="h-full">
      <div className="flex h-18 flex-col">
        <div className="flex h-full flex-col items-center justify-center text-lg font-bold">
          {quizes.length}/{CHINESE_CHARACTERS.length}
        </div>
        <div className="bg-base-300 h-1 w-full">
          <div
            style={{
              width: `${(quizes.length / CHINESE_CHARACTERS.length) * 100}%`,
            }}
            className="bg-primary h-full transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 p-6">
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
    </main>
  );
}

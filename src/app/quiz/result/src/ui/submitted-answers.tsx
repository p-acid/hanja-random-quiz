"use client";

import { SubmittedQuiz, submittedQuizzesAtom } from "@/atoms/submitted-quizzes";
import { useAtomValue } from "jotai";

export function SubmittedAnswers() {
  const submittedQuizzes = useAtomValue(submittedQuizzesAtom);

  const { correctAnswers, incorrectAnswers } = submittedQuizzes.reduce(
    ({ correctAnswers, incorrectAnswers }, quiz) => {
      const isCorrect = quiz.answer.reading === quiz.submittedAnswer;

      return {
        correctAnswers: isCorrect ? [...correctAnswers, quiz] : correctAnswers,
        incorrectAnswers: isCorrect
          ? incorrectAnswers
          : [...incorrectAnswers, quiz],
      };
    },
    { correctAnswers: [], incorrectAnswers: [] } as {
      correctAnswers: SubmittedQuiz[];
      incorrectAnswers: SubmittedQuiz[];
    },
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold tracking-tighter">맞은 답안</h1>
        <ul className="flex flex-col gap-3">
          {correctAnswers.map((quiz, index) => (
            <li
              key={index}
              className="bg-base-200 border-base-300 flex items-center gap-5 rounded-lg border p-3"
            >
              <div className="bg-base-300 flex size-12 flex-col items-center justify-center rounded-lg text-3xl">
                {quiz.answer.word}
              </div>

              <p className="text-base-content text-lg font-semibold tracking-tight">
                {quiz.answer.reading}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold tracking-tighter">틀린 답안</h1>
        <ul className="flex flex-col gap-3">
          {incorrectAnswers.map((quiz, index) => (
            <li
              key={index}
              className="bg-base-200 border-base-300 flex items-center gap-5 rounded-lg border p-3"
            >
              <div className="bg-base-300 flex size-12 flex-col items-center justify-center rounded-lg text-3xl">
                {quiz.answer.word}
              </div>
              <div className="flex gap-1">
                <p className="text-base-content text-lg font-semibold tracking-tight">
                  {quiz.answer.reading}
                </p>
                /
                <p className="text-lg tracking-tight text-gray-400">
                  {quiz.submittedAnswer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

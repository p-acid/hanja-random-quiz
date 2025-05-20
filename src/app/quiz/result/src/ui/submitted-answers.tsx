"use client";

import { SubmittedQuiz, submittedQuizzesAtom } from "@/atoms/submitted-quizzes";
import { ChineseCharacter } from "@/components/chinese-character";
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
        <div className="flex flex-col gap-3">
          {correctAnswers.map((quiz, index) => (
            <ChineseCharacter
              key={index}
              word={quiz.answer.word}
              reading={quiz.answer.reading}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold tracking-tighter">틀린 답안</h1>
        <div className="flex flex-col gap-3">
          {incorrectAnswers.map((quiz, index) => (
            <ChineseCharacter
              key={index}
              word={quiz.answer.word}
              reading={quiz.answer.reading}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

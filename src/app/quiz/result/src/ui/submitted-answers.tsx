"use client";

import { SubmittedQuiz, submittedQuizzesAtom } from "@/atoms/submitted-quizzes";
import { ChineseCharacter } from "@/components/chinese-character";
import { useAtomValue } from "jotai";
import { CircleSlash2 } from "lucide-react";

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
      <AnswerList
        title="맞은 답안"
        answers={correctAnswers}
        emptyMessage="맞은 답안이 없습니다."
      />
      <AnswerList
        title="틀린 답안"
        answers={incorrectAnswers}
        emptyMessage="틀린 답안이 없습니다."
      />
    </div>
  );
}

interface AnswerListProps {
  title: string;
  answers: SubmittedQuiz[];
  emptyMessage: string;
}

function AnswerList({ title, answers, emptyMessage }: AnswerListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold tracking-tighter">{title}</h1>
      <div className="flex flex-col gap-3">
        {answers.length === 0 ? (
          <div className="bg-base-200 flex h-40 flex-col items-center justify-center gap-5 rounded-lg">
            <CircleSlash2 className="text-base-content size-10" />
            <span className="text-zinc-400">{emptyMessage}</span>
          </div>
        ) : (
          answers.map((quiz, index) => (
            <ChineseCharacter
              key={index}
              word={quiz.answer.word}
              reading={quiz.answer.reading}
            />
          ))
        )}
      </div>
    </div>
  );
}

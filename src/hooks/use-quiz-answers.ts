import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";

import { submittedQuizzesAtom } from "@/atoms/submitted-quizzes";
import { QuizCommon } from "@/types/quiz";

interface UseQuizAnswersParams<A extends QuizCommon> {
  generateQuiz: (usedWords?: string[]) => A;
}

const useQuizAnswers = <A extends QuizCommon>({
  generateQuiz,
}: UseQuizAnswersParams<A>) => {
  const [currentQuiz, setCurrentQuiz] = useState<A>();

  const [submittedQuizzes, setSubmittedQuizzes] = useAtom(submittedQuizzesAtom);

  const memoizedGenerateQuiz = useCallback(
    (usedWords?: string[]) => {
      const quiz = generateQuiz(usedWords);
      return quiz;
    },
    [generateQuiz],
  );

  const updateQuiz = (submittedAnswer: string) => {
    if (!currentQuiz) return;

    setSubmittedQuizzes((prev) => [
      ...prev,
      {
        answer: { word: currentQuiz.question, reading: currentQuiz.answer },
        submittedAnswer,
      },
    ]);

    setCurrentQuiz(
      generateQuiz([...submittedQuizzes.map((quiz) => quiz.answer.word)]),
    );
  };

  useEffect(() => {
    setCurrentQuiz(memoizedGenerateQuiz());
  }, [memoizedGenerateQuiz]);

  useEffect(() => {
    setSubmittedQuizzes([]);
  }, [setSubmittedQuizzes]);

  return { currentQuiz, submittedQuizzes, updateQuiz };
};

export default useQuizAnswers;

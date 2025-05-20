import { useAtom } from "jotai";
import { useEffect, useState } from "react";

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
    setCurrentQuiz(generateQuiz());
  }, [generateQuiz]);

  useEffect(() => {
    setSubmittedQuizzes([]);
  }, [setSubmittedQuizzes]);

  return { currentQuiz, submittedQuizzes, updateQuiz };
};

export default useQuizAnswers;

export interface QuizCommon {
  question: string;
  answer: string;
}

export interface FourChoiceQuiz extends QuizCommon {
  options: string[];
  submittedAnswer: string | null;
}

export interface ShortAnswerQuiz extends QuizCommon {
  submittedAnswer: string | null;
}

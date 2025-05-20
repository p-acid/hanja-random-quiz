export type FourChoiceQuiz = {
  question: string;
  options: string[];
  answer: string;
  submittedAnswer: string | null;
};

export type ShortAnswerQuiz = {
  question: string;
  answer: string;
  submittedAnswer: string | null;
};

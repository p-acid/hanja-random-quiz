import { ChineseCharacters } from "@/constants/chinese-characters";
import { atom } from "jotai";

export type SubmittedQuiz = {
  answer: ChineseCharacters;
  submittedAnswer: string;
};

export const submittedQuizzesAtom = atom<SubmittedQuiz[]>([]);

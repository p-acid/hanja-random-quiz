import { ShortAnswerQuiz } from "@/types/quiz";
import { Word } from "@/types/word";
import { getRandomWord } from "./get-random-quiz";

/**
 * 단답형 퀴즈 생성 유틸 함수
 * @param totalWords 전체 단어들
 * @param usedWords 출제된 단어들
 */
export function getShortAnswerQuiz(
  totalWords: Word[],
  usedWords: string[] = [],
): ShortAnswerQuiz {
  const { reading, word } = getRandomWord(totalWords, usedWords);

  return {
    question: word,
    answer: reading,
    submittedAnswer: null,
  };
}

import { FourChoiceQuiz } from "@/types/quiz";
import { Word } from "@/types/word";
import { getRandomWord } from "./get-random-quiz";

/**
 * 4지선다 퀴즈 생성 유틸 함수
 * @param totalWords 전체 단어들
 * @param usedWords 출제된 단어들
 */
export function getFourChoiceQuiz(
  totalWords: Word[],
  usedWords: string[] = [],
): FourChoiceQuiz {
  const {
    index: questionIndex,
    reading,
    word,
  } = getRandomWord(totalWords, usedWords);

  const others = totalWords.filter((_, i) => i !== questionIndex);

  const shuffled = [...others].sort(() => 0.5 - Math.random());
  const wrongOptions = shuffled.slice(0, 3).map((item) => item.reading);

  const options = [...wrongOptions, reading].sort(() => 0.5 - Math.random());

  return {
    question: word,
    options,
    answer: reading,
    submittedAnswer: null,
  };
}

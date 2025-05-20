import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { ShortAnswerQuiz } from "@/types/quiz";

/**
 * 단답형 퀴즈 생성 유틸 함수
 * @param usedWords 출제된 단어들
 */
export function getShortAnswerQuiz(usedWords: string[] = []): ShortAnswerQuiz {
  const unused = CHINESE_CHARACTERS.filter(
    (item) => !usedWords.includes(item.word),
  );
  if (unused.length < 1 || CHINESE_CHARACTERS.length < 4)
    throw Error("문제를 생성하는 과정에서 오류가 발생했습니다.");

  const questionIndex = Math.floor(Math.random() * CHINESE_CHARACTERS.length);
  const questionItem = CHINESE_CHARACTERS[questionIndex];

  return {
    question: questionItem.word,
    answer: questionItem.reading,
    submittedAnswer: null,
  };
}

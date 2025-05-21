import { Word } from "@/types/word";

/**
 * 랜덤 단어 생성 유틸 함수
 * @param totalWords 전체 단어들
 * @param usedWords 출제된 단어들
 */
export function getRandomWord(
  totalWords: Word[],
  usedWords: string[] = [],
): Word & { index: number } {
  const unused = totalWords.filter((item) => !usedWords.includes(item.word));

  if (unused.length < 1 || totalWords.length < 4)
    throw Error("문제를 생성하는 과정에서 오류가 발생했습니다.");

  const questionIndex = Math.floor(Math.random() * totalWords.length);
  const questionItem = totalWords[questionIndex];

  return {
    index: questionIndex,
    ...questionItem,
  };
}

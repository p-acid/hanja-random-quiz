import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { FourChoiceQuiz } from "@/types/quiz";

/**
 * 4지선다 퀴즈 생성 유틸 함수
 * @param usedWords 출제된 단어들
 */
export function getFourChoiceQuiz(usedWords: string[] = []): FourChoiceQuiz {
  const unused = CHINESE_CHARACTERS.filter(
    (item) => !usedWords.includes(item.word),
  );
  if (unused.length < 1 || CHINESE_CHARACTERS.length < 4)
    throw Error("문제를 생성하는 과정에서 오류가 발생했습니다.");

  const questionIndex = Math.floor(Math.random() * CHINESE_CHARACTERS.length);
  const questionItem = CHINESE_CHARACTERS[questionIndex];

  const others = CHINESE_CHARACTERS.filter((_, i) => i !== questionIndex);

  const shuffled = [...others].sort(() => 0.5 - Math.random());
  const wrongOptions = shuffled.slice(0, 3).map((item) => item.reading);

  const options = [...wrongOptions, questionItem.reading].sort(
    () => 0.5 - Math.random(),
  );

  return {
    question: questionItem.word,
    options,
    answer: questionItem.reading,
    submittedAnswer: null,
  };
}

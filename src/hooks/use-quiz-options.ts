import { QUIZ_WORD_TYPE } from "@/app/quiz/src/constants/quiz-options";
import { SEARCH_PARAM_KEYS } from "@/constants/search-params";
import { createQueryString } from "@/utils/create-query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type QuizOptionQueries = {
  [SEARCH_PARAM_KEYS.WORD_TYPE]: string;
  [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]: boolean;
};

const useQuizOptions = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const wordType =
    searchParams.get(SEARCH_PARAM_KEYS.WORD_TYPE) ?? QUIZ_WORD_TYPE.SINGLE;

  const isAnswerRevealed =
    searchParams.get(SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED) === "true";

  const applyOptions = (queries: QuizOptionQueries) => {
    const queryString = createQueryString({
      [SEARCH_PARAM_KEYS.WORD_TYPE]: queries.wordType,
      [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]: queries.isAnswerRevealed,
    });
    push(pathname + `?${queryString}`);
  };

  return { isAnswerRevealed, wordType, applyOptions };
};

export default useQuizOptions;

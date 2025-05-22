import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { QUIZ_WORD_TYPE } from "@/app/quiz/src/constants/quiz-options";
import { SEARCH_PARAM_KEYS } from "@/constants/search-params";
import { LOCAL_STORAGE_KEY } from "@/constants/storage-key";
import { createQueryString } from "@/utils/create-query-string";
import { ValueOf } from "@/types/value-of";
import { getParsedStorageObject } from "@/utils/get-parsed-storage-object";

type QuizOptionQueries = {
  [SEARCH_PARAM_KEYS.WORD_TYPE]: ValueOf<typeof QUIZ_WORD_TYPE>;
  [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]: boolean;
};

const useQuizOptions = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const storageOptions = getParsedStorageObject<QuizOptionQueries>(
    LOCAL_STORAGE_KEY.QUIZ_OPTIONS,
  );

  const defaultOptions = {
    [SEARCH_PARAM_KEYS.WORD_TYPE]:
      (storageOptions?.[SEARCH_PARAM_KEYS.WORD_TYPE] as string) ||
      QUIZ_WORD_TYPE.SINGLE,
    [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]:
      !!storageOptions?.[SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED],
  };

  const wordType =
    searchParams.get(SEARCH_PARAM_KEYS.WORD_TYPE) ??
    defaultOptions[SEARCH_PARAM_KEYS.WORD_TYPE];

  const isAnswerRevealed = searchParams.get(
    SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED,
  )
    ? searchParams.get(SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED) === "true"
    : defaultOptions[SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED];

  const applyOptions = (queries: QuizOptionQueries) => {
    const queryString = createQueryString({
      [SEARCH_PARAM_KEYS.WORD_TYPE]: queries.wordType,
      [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]: queries.isAnswerRevealed,
    });
    push(pathname + `?${queryString}`);
  };

  return { wordType, isAnswerRevealed, applyOptions };
};

export default useQuizOptions;

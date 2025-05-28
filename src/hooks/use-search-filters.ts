import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { QUIZ_WORD_TYPE } from "@/app/(protected)/quiz/src/constants/quiz-options";
import { SEARCH_PARAM_KEYS } from "@/constants/search-params";
import { ValueOf } from "@/types/value-of";
import { createQueryString } from "@/utils/create-query-string";

type SearchFilterQueries = {
  [SEARCH_PARAM_KEYS.WORD_TYPE]: ValueOf<typeof QUIZ_WORD_TYPE>;
};

const useSearchFilters = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const wordType =
    searchParams.get(SEARCH_PARAM_KEYS.WORD_TYPE) ?? QUIZ_WORD_TYPE.SINGLE;

  const applyOptions = (queries: SearchFilterQueries) => {
    const queryString = createQueryString({
      [SEARCH_PARAM_KEYS.WORD_TYPE]: queries.wordType,
    });
    push(pathname + `?${queryString}`);
  };

  return { wordType, applyOptions };
};

export default useSearchFilters;

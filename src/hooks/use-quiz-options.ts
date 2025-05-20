import { SEARCH_PARAM_KEYS } from "@/constants/search-params";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQuizOptions = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isAnswerRevealed =
    searchParams.get(SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED) === "true";

  const toggleAnswerRevealed = () => {
    push(
      pathname +
        `?${SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED}=${!isAnswerRevealed}`,
    );
  };

  return { isAnswerRevealed, toggleAnswerRevealed };
};

export default useQuizOptions;

"use client";

import { debounce } from "lodash-es";
import { useCallback, useMemo, useRef, useState } from "react";
import { Frown, Search } from "lucide-react";

import { ChineseCharacter } from "@/components/chinese-character";
import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";
import { SearchFilter } from "./src/ui/search-filter";
import useSearchFilters from "@/hooks/use-search-filters";
import { QUIZ_WORD_TYPE } from "../quiz/src/constants/quiz-options";
import { CHINESE_CHARACTER_WORDS } from "@/constants/chinese-chracter-words";

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");

  const { wordType } = useSearchFilters();

  const totalWords =
    wordType === QUIZ_WORD_TYPE.SINGLE
      ? CHINESE_CHARACTERS
      : CHINESE_CHARACTER_WORDS;

  const debouncedSearch = useMemo(
    () =>
      debounce(() => {
        setQuery(inputRef.current?.value || "");
      }, 500),
    [],
  );

  const handleSearch = useCallback(() => {
    debouncedSearch();
  }, [debouncedSearch]);

  const filteredList = totalWords.filter(
    ({ word, reading }) => word.includes(query) || reading.includes(query),
  );

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
      <div className="div flex w-full items-center gap-2">
        <label className="input input-lg text-base font-normal">
          <Search className="size-5 stroke-zinc-400" />
          <input
            ref={inputRef}
            autoFocus
            className="grow"
            type="search"
            placeholder="한자 혹은 발음을 검색해주세요."
            onChange={handleSearch}
          />
        </label>
        <SearchFilter />
      </div>

      {filteredList.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filteredList.map((props, index) => (
            <ChineseCharacter key={index} {...props} />
          ))}
        </div>
      ) : (
        <div className="flex h-92 flex-col items-center justify-center gap-6 text-xl font-semibold text-stone-400">
          <Frown className="size-20" />
          검색 결과가 없습니다
        </div>
      )}
    </main>
  );
}

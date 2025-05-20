"use client";

import { debounce } from "lodash-es";
import { useCallback, useMemo, useRef, useState } from "react";
import { Frown, Search } from "lucide-react";

import { ChineseCharacter } from "@/components/chinese-character";
import { CHINESE_CHARACTERS } from "@/constants/chinese-characters";

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");

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

  const filteredList = CHINESE_CHARACTERS.filter(
    ({ word, reading }) => word.includes(query) || reading.includes(query),
  );

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
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

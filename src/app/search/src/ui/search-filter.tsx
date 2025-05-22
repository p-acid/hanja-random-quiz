"use client";

import { ListFilter } from "lucide-react";
import { useState } from "react";

import { QUIZ_WORD_TYPE_LIST } from "@/app/quiz/src/constants/quiz-options";
import { Drawer } from "@/components/drawer";
import { SEARCH_PARAM_KEYS } from "@/constants/search-params";
import useSearchFilters from "@/hooks/use-search-filters";
import { cn } from "@/utils/cn";

export function SearchFilter() {
  const { wordType, applyOptions } = useSearchFilters();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [optionValues, setOptionValues] = useState({
    [SEARCH_PARAM_KEYS.WORD_TYPE]: wordType ?? "",
  });

  const handleWordTypeChange = (type: string) => {
    setOptionValues((prev) => ({
      ...prev,
      [SEARCH_PARAM_KEYS.WORD_TYPE]: type,
    }));
  };

  const handleApplyOptions = () => {
    const { wordType } = optionValues;

    applyOptions({ wordType });
    setIsDrawerOpen(false);
  };

  return (
    <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Drawer.Trigger className="btn btn-lg btn-square">
        <ListFilter className="size-5" />
      </Drawer.Trigger>
      <Drawer.Content className="flex flex-col gap-10">
        <Drawer.Title>검색 필터</Drawer.Title>

        <div className="flex flex-col gap-10">
          <div className="flex w-full flex-col gap-4">
            <p className="text-base font-bold">검색 대상</p>
            <div className="flex items-center gap-2">
              {QUIZ_WORD_TYPE_LIST.map(({ type, title }) => (
                <button
                  key={type}
                  className={cn(
                    "badge badge-ghost border-base-300 h-9 cursor-pointer rounded-l-full rounded-r-full px-4.5 text-stone-400 transition-colors duration-200",
                    {
                      "bg-base-300 text-base-content":
                        optionValues[SEARCH_PARAM_KEYS.WORD_TYPE] === type,
                    },
                  )}
                  onClick={() => handleWordTypeChange(type)}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          <button className="btn btn-lg" onClick={handleApplyOptions}>
            적용하기
          </button>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

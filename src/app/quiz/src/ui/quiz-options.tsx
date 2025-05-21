"use client";

import { Drawer } from "@/components/drawer";
import { SEARCH_PARAM_KEYS } from "@/constants/search-params";
import useQuizOptions from "@/hooks/use-quiz-options";
import { cn } from "@/utils/cn";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { QUIZ_WORD_TYPE_LIST } from "../constants/quiz-options";
import { LOCAL_STORAGE_KEY } from "@/constants/storage-key";

export function QuizOptions() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { wordType, isAnswerRevealed, applyOptions } = useQuizOptions();

  const [optionValues, setOptionValues] = useState({
    [SEARCH_PARAM_KEYS.WORD_TYPE]: wordType ?? "",
    [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]: isAnswerRevealed,
    isDefault: false,
  });

  const handleWordTypeChange = (type: string) => {
    setOptionValues((prev) => ({
      ...prev,
      [SEARCH_PARAM_KEYS.WORD_TYPE]: type,
    }));
  };

  const toggleAnswerRevealed = () => {
    setOptionValues((prev) => ({
      ...prev,
      [SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]:
        !prev[SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED],
    }));
  };

  const toggleDefault = () => {
    setOptionValues((prev) => ({
      ...prev,
      isDefault: !prev.isDefault,
    }));
  };

  const handleApplyOptions = () => {
    const { isDefault, ...restOptionValues } = optionValues;

    if (isDefault) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.QUIZ_OPTIONS,
        JSON.stringify(restOptionValues),
      );
    }

    applyOptions(restOptionValues);
    setIsDrawerOpen(false);
  };

  return (
    <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Drawer.Trigger className="btn btn-ghost btn-square">
        <SlidersHorizontal className="size-5" />
      </Drawer.Trigger>
      <Drawer.Content className="flex flex-col gap-10">
        <Drawer.Title>퀴즈 설정</Drawer.Title>

        <div className="flex flex-col gap-10">
          <div className="flex w-full flex-col gap-4">
            <p className="text-base font-bold">문제 유형</p>
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

          <div className="flex w-full flex-col gap-4">
            <p className="text-base font-bold">풀이 방식</p>
            <label
              className={cn(
                "label w-full justify-between transition-colors duration-200",
                {
                  "text-white":
                    optionValues[SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED],
                },
              )}
            >
              답안 제출 후 정답 확인하기
              <input
                type="checkbox"
                className="checkbox"
                checked={optionValues[SEARCH_PARAM_KEYS.IS_ANSWER_REVEALED]}
                onChange={toggleAnswerRevealed}
              />
            </label>
          </div>

          <label
            className={cn(
              "label w-full justify-between text-base transition-colors duration-200",
              {
                "text-white": optionValues.isDefault,
              },
            )}
          >
            기본값으로 지정
            <input
              type="checkbox"
              className="toggle"
              checked={optionValues.isDefault}
              onChange={toggleDefault}
            />
          </label>

          <button className="btn btn-lg" onClick={handleApplyOptions}>
            적용하기
          </button>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

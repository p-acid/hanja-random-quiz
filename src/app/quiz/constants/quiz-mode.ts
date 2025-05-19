import { Hash, Type } from "lucide-react";

export const QUIZ_MODE = {
  FOUR_CHOICE: "fourChoice",
  SHORT_ANSWER: "shortAnswer",
} as const;

export const QUIZ_MODE_LIST = [
  {
    icon: Hash,
    mode: QUIZ_MODE.FOUR_CHOICE,
    title: "4지선다 퀴즈",
    description: "4가지 지문 중 정답을 골라보세요",
  },
  {
    icon: Type,
    mode: QUIZ_MODE.SHORT_ANSWER,
    title: "단답형 퀴즈",
    description: "타이핑을 통해 정답을 입력하여 제출하세요",
  },
];

import { QuizOptions } from "./src/ui/quiz-options";
import { ModeSelect } from "./src/ui/mode-select";

export default function QuizPage() {
  return (
    <main className="flex h-full flex-col gap-10 px-6 pt-10 pb-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tighter">퀴즈 모드 선택</h1>
        <p className="text-base tracking-tight text-zinc-400">
          원하시는 퀴즈 모드를 선택해주세요.
        </p>
      </div>

      <QuizOptions />
      <ModeSelect />
    </main>
  );
}

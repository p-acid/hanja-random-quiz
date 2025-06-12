import { QuizOptions } from "./src/ui/quiz-options";
import { ModeSelect } from "./src/ui/mode-select";

export default function QuizPage() {
  return (
    <main className="flex h-full flex-col gap-10 px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter">퀴즈 모드 선택</h1>
        <QuizOptions />
      </div>

      <ModeSelect />
    </main>
  );
}

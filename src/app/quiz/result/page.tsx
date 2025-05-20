import Link from "next/link";
import { SubmittedAnswers } from "./src/ui/submitted-answers";
import { PAGE_ROUTES } from "@/constants/page-routes";

export default function ResultPage() {
  return (
    <main className="flex h-full flex-col gap-12 px-6 pt-10 pb-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tighter">제출 답안 확인</h1>
        <p className="text-base tracking-tight text-zinc-400">
          제출한 답안을 확인해보세요.
        </p>
      </div>
      <SubmittedAnswers />
      <Link href={PAGE_ROUTES.QUIZ} className="btn btn-lg w-full">
        다시 퀴즈 풀기
      </Link>
    </main>
  );
}

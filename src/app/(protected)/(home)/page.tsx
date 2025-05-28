import Link from "next/link";

import { PAGE_ROUTES } from "@/constants/page-routes";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between px-6 py-8">
      <div className="flex h-full w-full flex-col justify-center gap-3">
        <div className="w-fit rounded-md bg-zinc-800 px-2 py-1 text-2xl font-black">
          漢
        </div>
        <h1 className="mt-2 text-3xl leading-10 font-bold tracking-tighter whitespace-pre">
          랜덤 한자 퀴즈
        </h1>
        <p className="text-base tracking-tight whitespace-pre text-stone-400">
          {"약 900개의 한자 단어를\n랜덤 퀴즈를 통해 외워보세요!"}
        </p>
      </div>
      <div className="flex w-full flex-col gap-3">
        <Link href={PAGE_ROUTES.QUIZ} className="btn btn-lg w-full">
          퀴즈 풀러가기
        </Link>
        <Link href={PAGE_ROUTES.SEARCH} className="btn btn-lg w-full">
          한자 검색하기
        </Link>
      </div>
    </main>
  );
}

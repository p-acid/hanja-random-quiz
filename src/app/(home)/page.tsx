import { PAGE_ROUTES } from "@/constants/page-routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-20 px-4">
      <div className="flex w-full flex-col gap-5">
        <div className="w-fit rounded-md bg-zinc-800 px-2 py-1 text-2xl font-black">
          漢
        </div>
        <h1 className="text-5xl leading-10 font-semibold tracking-tighter whitespace-pre">
          {"HANJA\nRANDOM QUIZ"}
        </h1>
        <p className="text-lg leading-5.5 tracking-tight whitespace-pre text-zinc-400">
          {"Memorize Chinese Characters\nby Random Quiz"}
        </p>
      </div>
      <Link href={PAGE_ROUTES.QUIZ} className="btn w-full">
        Get Start
      </Link>
    </main>
  );
}

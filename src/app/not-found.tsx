import { PAGE_ROUTES } from "@/constants/page-routes";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">오류가 발생했습니다</h1>
      <Link href={PAGE_ROUTES.HOME} className="btn btn-lg">
        <Home className="size-5" /> 홈으로 돌아가기
      </Link>
    </main>
  );
}

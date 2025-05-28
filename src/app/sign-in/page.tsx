import { NotebookPen } from "lucide-react";
import { SocialAuth } from "./src/ui/social-auth";

export default async function SignInPage() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-14">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="bg-primary mb-4 flex size-10 flex-col items-center justify-center rounded-xl">
          <NotebookPen className="size-5" />
        </div>
        <h1 className="text-base-content text-3xl font-bold tracking-tighter">
          보카퀴즈
        </h1>
        <p className="text-center text-sm text-stone-300">
          보카퀴즈에 오신 것을 환영합니다!
          <br />
          소셜 계정으로 로그인하여 시작하세요.
        </p>
      </div>
      <SocialAuth />
    </main>
  );
}

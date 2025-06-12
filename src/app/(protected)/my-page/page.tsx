import { createClient } from "@/libs/supabase/server";

export default async function MyPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div>
      <h1 className="text-xl font-bold">내 정보</h1>
      <img
        src={data.user?.user_metadata?.avatar_url}
        alt="유저"
        className="avatar size-12 rounded-full"
      />
      <p>{data.user?.email}</p>
      <p>{data.user?.user_metadata?.full_name}</p>
    </div>
  );
}

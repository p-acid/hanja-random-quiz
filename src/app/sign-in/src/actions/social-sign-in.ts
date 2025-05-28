"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";
import { Provider } from "@supabase/supabase-js";

export async function socialSignIn(provider: Provider) {
  const supabase = await createClient();

  const redirectTo = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  });

  if (error) {
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url);
  }
}

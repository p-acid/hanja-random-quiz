import { PAGE_ROUTES } from "@/constants/page-routes";
import { NavLayout } from "@/layouts/nav-layout";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data) {
    redirect(PAGE_ROUTES.SIGN_IN);
  }

  return <NavLayout>{children}</NavLayout>;
}

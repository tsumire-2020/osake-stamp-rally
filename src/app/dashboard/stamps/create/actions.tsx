"use server";
import { fetchCreateStampRally } from "@/libs/fetcher/stampsFecher";
//サーバー側の処理　クライアント→サーバーではなく　クライアント→NextJSのアクションサーバ→APIサーバー

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//zod

export const createStampRallyAction = async (
  state: {},
  formData: FormData) => {
  const StampRally = {
    title:formData.get("title"),
    description: formData.get("description",)
  } //zod でバリデーション処理をする

  const newStampRally = await fetchCreateStampRally(StampRally);

  revalidatePath("/") //更新処理の際に画面（キャッシュ）を更新する
  // redirect("/dashboard")
  return{}
}
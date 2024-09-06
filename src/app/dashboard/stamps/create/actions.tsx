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
  console.log("newstamp"+JSON.stringify(StampRally))

  const newStampRally = await fetchCreateStampRally(StampRally);
  console.log("newstamp"+JSON.stringify(newStampRally))
  const {id} = newStampRally
  revalidatePath("/") //更新処理の際に画面（キャッシュ）を更新する
  redirect(`/stamp-rally/${id}`)
  // redirect("/dashboard")
}
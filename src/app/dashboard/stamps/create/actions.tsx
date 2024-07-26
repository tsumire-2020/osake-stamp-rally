"use server";
//サーバー側の処理　クライアント→サーバーではなく　クライアント→NextJSのアクションサーバ→APIサーバー

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createStampRallyAction = async (formData: FormData) => {
  const responce = await fetch("http://127.0.0.1:8000/stamprally",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: formData.get("title"),
      description: formData.get("description"),
    })
  }
  )
  console.log(responce.status);

  revalidatePath("/") //更新処理の際に画面（キャッシュ）を更新する
  redirect("/dashboard")
}
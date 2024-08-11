//rafce デフォルトエクスポートさせたい画面
import { fetchStampRallyById } from '@/libs/fetcher/stampsFecher';
import { NextPage } from 'next';
import React from 'react'

interface Props {
  params: {
    id: string;
  }
  // searchParams: {}クエリパラメーター
}

const Page: NextPage<Props> = async ({
  params: {id}
}) => {
  const stampRally = await fetchStampRallyById(id);
  console.log(stampRally)
  return (
    <div>
      <div>{stampRally.title}</div>
      <div>{stampRally.description}</div>

      <div>Todo:スタンプ一覧</div>
      <div>
        <div>Todo: 参加機能</div>
        <div>Todo: コメント</div>
      </div>
    </div>
  )
}

export default Page
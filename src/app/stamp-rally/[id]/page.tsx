//rafce デフォルトエクスポートさせたい画面
import { fetchStampRallyById } from '@/libs/fetcher/stampsFecher';
import { NextPage } from 'next';
import React from 'react'
import { StampRallySection } from './components/StampRallySection';

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
    <StampRallySection id={id}/>
  )
}

export default Page
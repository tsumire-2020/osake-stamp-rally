import React from 'react'
import { CreateStampralluFrom } from './_component/CreateStampralluFrom';
import { fetchAlcoholList } from '@/libs/fetcher/alcoholFetcher';

export const CreatePage =async () => {
  const alcoholList= await fetchAlcoholList();
  return(
    <CreateStampralluFrom/>
  )
}
export default CreatePage;
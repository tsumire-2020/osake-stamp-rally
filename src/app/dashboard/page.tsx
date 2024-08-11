// rafc Creates a React Arrow Function Component 
import { CreateStampRally } from '@/components/CreateStampRally'
import { fetcherStamprallies } from '@/libs/fetcher/stampsFecher';
import React from 'react'
import { StampRallyListSection } from './components/stamprally-list-section';

export const revalidate = 0; //キャッシュをオプトアウトするための値

const DashBoardPage = async () => {

  return (
    <div className='pt-12 container mx-auto'>
            <CreateStampRally />
            <StampRallyListSection />
    </div>
  )
};
export default DashBoardPage;
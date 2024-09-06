import { fetchStampRallyById } from '@/libs/fetcher/stampsFecher';
import Link from 'next/link';
import React from 'react'

interface Props {
    id: string;
}

export const StampRallySection =async ({
  id
}: Props) => {
  const stampRally = await fetchStampRallyById(id);
  const stamps = stampRally.stamps
  console.log(stampRally)
  return (
    <div className='container mx-auto'>
      <div>{stampRally.title}</div>
      <div>{stampRally.description}</div>

      <div className='grid grid-cols-3 w-[600px] mx-auto mb-10'>
        {stamps?.map((stamp) => (
          <div key={stamp.id} className='border h-[200px] w-[200px] flex items-center justify-center'>
            <div>{stamp.alcohol.name}</div>

          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        {stamps?.map((stamp) => (
          <Link
            key={stamp.id}
            className='border p-3 rounded-lg'
            href={`/alcohols/${stamp.alcohol.id}`}
          >
            <div>{stamp.alcohol.name}</div>
          </Link>
        ))}
      </div>


      <div>
      </div>
    </div>
  )
}

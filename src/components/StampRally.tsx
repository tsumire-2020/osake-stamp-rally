"use client"
import { Stamp, fetchStamps } from '@/libs/fetcher/stampsFecher';
import { SimpleGrid } from '@yamada-ui/react'
import React, { useEffect, useState } from 'react'

export default function StampRally() {
  const [stamps, setStamps] = useState<Stamp[]>([]);


  useEffect(() => {
    // Todo fetch
    const init = async () => {
      const newStamps = await fetchStamps()
      setStamps(newStamps);
    }

    init();
  }, []);
  return (
    <div>
      <SimpleGrid columns={3}>
        {stamps.map((stamp, index) => {
            return <div key={index}>{stamp ? "〇" : "×"}</div>;
        })}
      </SimpleGrid>
      StampRally</div>
  )
}

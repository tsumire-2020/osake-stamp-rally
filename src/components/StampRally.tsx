"use client"
import { SimpleGrid } from '@yamada-ui/react'
import React, { useState } from 'react'

export default function StampRally() {
  const [stamps, Setstamps] = useState(Array(9).fill(false));
  const handleClick = async (index: number) => {
    const newStamps = stamps.map((stamp, i) => {
      if (i === index)return !stamp;
      return stamp;
    });

    Setstamps(newStamps);
  }
  return (
    <div>
      <SimpleGrid columns={3}>
        {stamps.map((stamp, index) => {
            return <div key={index} onClick={() => handleClick(index)}>{stamp ? "〇" : "×"}</div>;
        })}
      </SimpleGrid>
      StampRally</div>
  )
}

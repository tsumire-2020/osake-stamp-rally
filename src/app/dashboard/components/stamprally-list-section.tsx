import { fetcherStamprallies } from '@/libs/fetcher/stampsFecher';
import React from 'react'
import { Heading, LinkBox, LinkOverlay } from '@yamada-ui/react';

export const StampRallyListSection = async() => {
  const stamprallies = await fetcherStamprallies()
  console.log(stamprallies);// これはサーバーなのでターミナルの方で出るけどF12
  return (
    <div>
      {stamprallies.map((stamprally) =>(
        <LinkBox key={stamprally.id}>
          <Heading>
            <LinkOverlay
              href={`stamp-rally/${stamprally.id}`}
            >
              {stamprally.id}
            </LinkOverlay>
          </Heading>
          {/* Todo */}
        </LinkBox>
      ))}
    </div>
  )
}

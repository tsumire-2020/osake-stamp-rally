import React, { FunctionComponent, ReactNode } from 'react'
import { UIProvider } from '@yamada-ui/react'

interface Props {
  children: ReactNode
}


export const Providers: FunctionComponent<Props> = ({
  children
}) => {
  return (



    <UIProvider>
      {children}
    </UIProvider>
  );
}

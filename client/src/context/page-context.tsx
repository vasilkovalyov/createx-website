import React, { ReactNode, createContext, useContext } from 'react'

import { PageResponseProps } from '@/cms/interfaces/page'

type Props = {
  children: ReactNode
} & PageResponseProps

export const PagesStateContext = createContext<PageResponseProps | null>(null)

export function PageProvider({ children, ...props }: Props) {
  return <PagesStateContext.Provider value={props}>{children}</PagesStateContext.Provider>
}

function isPagesStateOk(state: PageResponseProps | null): state is PageResponseProps {
  return !!state
}

export function usePage(): PageResponseProps {
  const state = useContext(PagesStateContext)

  if (state === undefined || !isPagesStateOk(state)) {
    throw new Error('usePages must be used within PagesProvider')
  }

  return state
}

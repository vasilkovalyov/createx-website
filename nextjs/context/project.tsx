import { IBreadcrumbs } from 'interfaces/common'
import React, { ReactNode, createContext, useContext } from 'react'
import { IBreadCrumbsField, IPageField } from '../interfaces/fields'

type Props = {
  children: ReactNode
} & IPageField

export const PagesStateContext = createContext<IPageField | null>(null)

export function PageProvider({ children, ...props }: Props) {
  const state: IPageField = {
    blockHeader: props.blockHeader,
    blockFooter: props.blockFooter,
    pages: props.pages,
    blockFormDetail: props.blockFormDetail,
    NODE_ENV: props.NODE_ENV,
    services: props.services,
    works: props.works,
    projectCategory: props.projectCategory,
  }

  return <PagesStateContext.Provider value={state}>{children}</PagesStateContext.Provider>
}

function isPagesStateOk(state: IPageField | null): state is IPageField {
  return !!state
}

export function usePage(): [IPageField] {
  const state = useContext(PagesStateContext)

  if (state === undefined || !isPagesStateOk(state)) {
    throw new Error('usePages must be used within PagesProvider')
  }

  return [state]
}

export function useBreadcrumbs(): [IBreadCrumbsField | null] {
  const state = useContext(PagesStateContext)

  if (state === undefined || !isPagesStateOk(state)) throw new Error('usePages must be used within PagesProvider')
  if (!state.pages.data.length) return [null]

  const attributes = state.pages.data[0].attributes

  let breadCrumbs: IBreadCrumbsField | undefined | null

  for (const item in attributes) {
    if (item === 'Breadcrumbs' && item !== null && attributes[item] !== null && attributes[item].BreadCrumbs !== null) {
      breadCrumbs = attributes['Breadcrumbs']
      break
    }
    if (
      item === 'BreadcrumbsInner' &&
      item !== null &&
      attributes[item] !== null &&
      attributes[item].BreadCrumbs !== null
    ) {
      breadCrumbs = attributes['BreadcrumbsInner']
      break
    }
  }

  if (!breadCrumbs) return [null]

  return [breadCrumbs]
}

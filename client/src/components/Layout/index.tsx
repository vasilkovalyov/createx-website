import React from 'react'
import Head from 'next/head'

import { LayoutProps } from './Layout.type'

import { BlockEnum } from '@/utils/blockEnums'
import { renderByBlockType } from '@/cms/blocks'

function Layout({ children, head, className }: LayoutProps) {
  return (
    <div id="wrapper">
      <Head>
        <title>{head?.title ?? 'title'}</title>
        <meta name="description" content={head?.description ?? 'description'} />
        <meta name="keywords" content={head?.keywords ?? 'keywords'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderByBlockType(BlockEnum.BlockHeader)}
      <main className={className}>{children}</main>
    </div>
  )
}

export default Layout

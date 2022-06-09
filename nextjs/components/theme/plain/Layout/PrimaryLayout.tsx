import React from 'react'

import { Block } from '../../../../enums/blocks'
import { renderByBlockType } from '../../../../components'

export default function Header({ children }: { children: React.ReactNode }) {
  const header = renderByBlockType(Block.BlockHeader)
  const footer = renderByBlockType(Block.BlockFooter)

  return (
    <div id="wrapper">
      {header}
      <main className="main">{children}</main>
      {footer}
    </div>
  )
}

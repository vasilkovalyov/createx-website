import React from 'react'
import { usePage } from '../../context/project'
import Container from '../theme/plain/Container'
import { getComponent } from 'components'
import { IBlockHeading } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getBlockData } from 'utilities/blockData'

export default function BlockHeadingBlock() {
  const [page] = usePage()

  if (!page?.pages.data) return null
  if (!page?.pages.data[0].attributes.Body) return

  const blockData = getBlockData(page, Block.BlockHeading)
  if (!blockData) return null

  const props: IBlockHeading = {
    Title: page?.pages.data[0].attributes.Title,
    headingLevel: 'h1',
    className: 'page-title',
  }

  return <Container>{getComponent<IBlockHeading>(Block.BlockHeading, props)}</Container>
}

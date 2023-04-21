import React from 'react'

// Component blocks
import BlockHeader from '@/components/Header'

import { BlockEnum } from '@/utils/blockEnums'

interface IBlockComponents {
  [key: string]: React.FunctionComponent
}

export const blockComponents: IBlockComponents = {
  // Component blocks
  [BlockEnum.BlockHeader]: BlockHeader,
}

export function renderByBlockType(BlockType: BlockEnum) {
  const Component = BlockType ? blockComponents[BlockType] : null
  if (!Component) return null
  return <Component />
}

export function renderBlocks(blocks: object[] | any[]) {
  return blocks.map((blockContent, index) => {
    return <React.Fragment key={index}>{renderBlock(blockContent.__typename, index)}</React.Fragment>
  })
}

export function renderBlock(BlockType: BlockEnum, index?: number) {
  const Component = BlockType ? blockComponents[BlockType] : null
  if (!Component) return <></>
  return <Component key={index} />
}

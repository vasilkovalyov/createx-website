import React from 'react'

// Component blocks
import BlockHeader from '@/components/Header'
import CmsBlockHeroCarousel from '@/cms/blocks/CmsBlockHeroCarousel'
import CmsBlockHero from '@/cms/blocks/CmsBlockHero'

import { BlockEnum } from '@/utils/blockEnums'
import { IRegistryItem } from '@/interfaces/common'

import plainThemeComponents from '../../blocks'

interface IBlockComponents {
  [key: string]: React.FunctionComponent
}

const registeredComponents: { [theme: string]: IRegistryItem[] } = {
  plain: plainThemeComponents,
}

export const blockComponents: IBlockComponents = {
  // Component blocks
  [BlockEnum.BlockHeader]: BlockHeader,
  [BlockEnum.BlockHeroCarousel]: CmsBlockHeroCarousel,
  [BlockEnum.BlockHero]: CmsBlockHero,
}

export function renderByBlockType(BlockType: BlockEnum) {
  const Component = BlockType ? blockComponents[BlockType] : null
  if (!Component) return null
  return <Component />
}

export function renderBlocks(blocks: object[] | any[]) {
  if (!blocks) return null
  return blocks.map((blockContent, index) => {
    return <React.Fragment key={index}>{renderBlock(blockContent.Slug, index)}</React.Fragment>
  })
}

export function renderBlock(BlockType: BlockEnum, index?: number) {
  const Component = BlockType ? blockComponents[BlockType] : null
  if (!Component) return <></>
  return <Component key={index} />
}

export function getComponent<T>(BlockType: BlockEnum, props: T) {
  const byBlockType = registeredComponents['plain']?.find((c) => c.BlockType === BlockType)
  if (!byBlockType) return null
  const Component: any | null = byBlockType?.component || null
  if (!Component) return null
  return <Component {...props} />
}

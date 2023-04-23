import React from 'react'

// Component blocks
import BlockHeader from '@/components/Header'
import CmsBlockHeroCarousel from '@/cms/blocks/CmsBlockHeroCarousel'
import CmsBlockHero from '@/cms/blocks/CmsBlockHero'
import CmsBlockServices from '@/cms/blocks/CmsBlockServices'

import { BlockEnum } from '@/utils/blockEnums'
import { IRegistryItem } from '@/interfaces/common'

import plainThemeComponents from '../../blocks'
import { FieldAttributes } from '../interfaces/page'
import { IBreadcrumbItem } from '@/components/Breadcrumbs/Breadcrumbs.type'

interface IBlockComponents {
  [key: string]: React.FunctionComponent
}

const registeredComponents: { [theme: string]: IRegistryItem[] } = {
  plain: plainThemeComponents,
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

export function renderBlocks(blocks: FieldAttributes[] | [], breadcrumbs?: IBreadcrumbItem[] | null) {
  if (!blocks.length) return null

  return blocks.map((block, index) => {
    if (block.Slug === BlockEnum.BlockHeroCarousel) {
      return <CmsBlockHeroCarousel key={`${block.Slug}-${index}`} {...block} />
    }
    if (block.Slug === BlockEnum.BlockHero) {
      return <CmsBlockHero key={`${block.Slug}-${index}`} {...block} breadcrumbs={breadcrumbs} />
    }

    return null
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

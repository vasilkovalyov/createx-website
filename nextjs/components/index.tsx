import React from 'react'

// Pages blocks
import PageOurWorks from './pages/PageOurWorks'
import PageOurWorkInner from './pages/PageOurWorkInner'

// Component blocks
import BlockHeroBlock from './blocks/BlockHeroBlock'
import BlockHeaderBlock from './blocks/BlockHeaderBlock'
import BlockFooterBlock from './blocks/BlockFooterBlock'
import BlockFormDetailBlock from './blocks/BlockFormDetailBlock'
import BlockOurClientsTestimonialsBlock from './blocks/BlockOurClientsTestimonialsBlock'
import BlockIntroCarouselBlock from './blocks/BlockIntroCarouselBlock'
import BlockBenefitsBlock from './blocks/BlockBenefitsBlock'
import BlockServicesBlock from './blocks/BlockServicesBlock'
import BlockPricingBlock from './blocks/BlockPricingBlock'
import BlockWorkStepsBlock from './blocks/BlockWorkStepsBlock'
import BlockServiceDescriptionBlock from './blocks/BlockServiceDescriptionBlock'
import BlockOurWorksBlock from './blocks/BlockOurWorksBlock'
import BlockPreviewServicesBlock from './blocks/BlockPreviewServicesBlock'

import plainThemeComponents from './theme/plain'
import { IRegistryItem } from '../interfaces/blocks'

import { Block } from '../enums/blocks'
import { IContentBlock } from '../interfaces/pages'

export const blockComponents = {
  // Pages blocks
  PageOurWorks: PageOurWorks,
  PageOurWorkInner: PageOurWorkInner,

  // Component blocks
  [Block.BlockHeader]: BlockHeaderBlock,
  [Block.BlockFooter]: BlockFooterBlock,
  [Block.BlockHero]: BlockHeroBlock,
  [Block.BlockFormDetail]: BlockFormDetailBlock,
  [Block.BlockOurClientsTestimonials]: BlockOurClientsTestimonialsBlock,
  [Block.BlockIntroCarousel]: BlockIntroCarouselBlock,
  [Block.BlockBenefits]: BlockBenefitsBlock,
  [Block.BlockPricing]: BlockPricingBlock,
  [Block.BlockServices]: BlockServicesBlock,
  [Block.BlockWorkSteps]: BlockWorkStepsBlock,
  [Block.BlockServiceDescription]: BlockServiceDescriptionBlock,
  [Block.BlockOurWorks]: BlockOurWorksBlock,
  [Block.BlockPreviewServices]: BlockPreviewServicesBlock,
}

const registeredComponents: { [theme: string]: IRegistryItem[] } = {
  plain: plainThemeComponents,
}

export function renderBlocks(blocks: IContentBlock[] | any[]) {
  return blocks.map((blockContent, index) => {
    return <div key={index}>{blockContent.BlockType ? renderBlock(blockContent.BlockType as Block, index) : null}</div>
  })
}

export function renderBlock(BlockType: Block, index?: number) {
  const Component = BlockType ? blockComponents[BlockType] : null
  // const byBlockType = registeredComponents['plain']?.filter((c) => c.BlockType === BlockType)
  if (!Component) return <></>
  return <Component key={index} />
}

export function getComponent<T>(BlockType: Block, props: T) {
  let Component: React.ComponentType | null
  const byBlockType = registeredComponents['plain']?.filter((c) => c.BlockType === BlockType)
  Component = byBlockType[0]?.component || null
  if (!Component) return null
  return <Component {...props} />
}

export function renderByBlockType(BlockType: Block) {
  const Component = BlockType ? blockComponents[BlockType] : null
  if (!Component) return null
  return <Component />
}

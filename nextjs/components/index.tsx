import React from 'react'

// Pages blocks
import PagePostSingle from './pages/PagePostSingle'

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
import BlockProjectStepsBlock from './blocks/BlockProjectStepsBlock'
import BlockServiceDescriptionBlock from './blocks/BlockServiceDescriptionBlock'
import BlockOurProjectsBlock from './blocks/BlockOurProjectsBlock'
import BlockPreviewServicesBlock from './blocks/BlockPreviewServicesBlock'
import BlockHeadingBlock from './blocks/BlockHeadingBlock'
import BlockImageGalleryBlock from './blocks/BlockImageGalleryBlock'
import BlockProjectDescriptionBlock from './blocks/BlockProjectDescriptionBlock'
import BlockConstructiveDecisionsBlock from './blocks/BlockConstructiveDecisionsBlock'
import BlockNewsBlock from './blocks/BlockNewsBlock'
import BlockLatestNewsBlock from './blocks/BlockLatestNewsBlock'
import BlockLatestProjectsBlock from './blocks/BlockLatestProjectsBlock'
import BlockRelatedProjectsBlock from './blocks/BlockRelatedProjectsBlock'
import BlockOurHistoryBlock from './blocks/BlockOurHistoryBlock'
import BlockOurTeamBlock from './blocks/BlockOurTeamBlock'
import BlockProjectStatisticsBlock from './blocks/BlockProjectStatisticsBlock'
import BlockTestimonialBlock from './blocks/BlockTestimonialBlock'
import BlockAvailablePositionsBlock from './blocks/BlockAvailablePositionsBlock'
import BlockOurOfficesBlock from './blocks/BlockOurOfficesBlock'

import plainThemeComponents from './theme/plain'
import { IRegistryItem } from '../interfaces/blocks'

import { Block } from '../enums/blocks'
import { IContentBlock } from '../interfaces/pages'

export const blockComponents = {
  // Pages blocks
  PagePostSingle: PagePostSingle,

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
  [Block.BlockProjectSteps]: BlockProjectStepsBlock,
  [Block.BlockServiceDescription]: BlockServiceDescriptionBlock,
  [Block.BlockOurProjects]: BlockOurProjectsBlock,
  [Block.BlockPreviewServices]: BlockPreviewServicesBlock,
  [Block.BlockHeading]: BlockHeadingBlock,
  [Block.BlockImageGallery]: BlockImageGalleryBlock,
  [Block.BlockProjectDescription]: BlockProjectDescriptionBlock,
  [Block.BlockConstructiveDecisions]: BlockConstructiveDecisionsBlock,
  [Block.BlockNews]: BlockNewsBlock,
  [Block.BlockLatestNews]: BlockLatestNewsBlock,
  [Block.BlockLatestProjects]: BlockLatestProjectsBlock,
  [Block.BlockRelatedProjects]: BlockRelatedProjectsBlock,
  [Block.BlockOurHistory]: BlockOurHistoryBlock,
  [Block.BlockOurTeam]: BlockOurTeamBlock,
  [Block.BlockProjectStatistics]: BlockProjectStatisticsBlock,
  [Block.BlockTestimonial]: BlockTestimonialBlock,
  [Block.BlockAvailablePositions]: BlockAvailablePositionsBlock,
  [Block.BlockOurOffices]: BlockOurOfficesBlock,
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
  if (!Component) return <></>
  return <Component key={index} />
}

export function getComponent<T>(BlockType: Block, props: T) {
  const byBlockType = registeredComponents['plain']?.find((c) => c.BlockType === BlockType)
  if (!byBlockType) return null
  const Component: any | null = byBlockType?.component || null
  if (!Component) return null
  return <Component {...props} />
}

export function renderByBlockType(BlockType: Block) {
  const Component = BlockType ? blockComponents[BlockType] : null
  if (!Component) return null
  return <Component />
}

import { Block } from '../../../enums/blocks'
import { IRegistryItem } from '../../../interfaces/blocks'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import BlockHero from './BlockHero'
import BlockFormDetail from './BlockFormDetail'
import BlockOurClientsTestimonials from './BlockOurClientsTestimonials'
import BlockIntroCarousel from './BlockIntroCarousel'
import BlockBenefits from './BlockBenefits'
import BlockServices from './BlockServices'
import BlockPricing from './BlockPricing'
import BlockProjectSteps from './BlockProjectSteps'
import BlockServiceDescription from './BlockServiceDescription'
import BlockOurProject from './BlockOurProjects'
import BlockPreviewServices from './BlockPreviewServices'
import BlockImageGallery from './BlockImageGallery'
import BlockProjectDescription from './BlockProjectDescription'
import BlockHeading from './BlockHeading'
import BlockConstructiveDecisions from './BlockConstructiveDecisions'

const components: IRegistryItem[] = [
  {
    BlockType: Block.BlockHeader,
    component: Header,
  },
  {
    BlockType: Block.BlockFooter,
    component: Footer,
  },
  {
    BlockType: Block.BlockHeading,
    component: BlockHeading,
  },
  {
    BlockType: Block.BlockHero,
    component: BlockHero,
  },
  {
    BlockType: Block.BlockIntroCarousel,
    component: BlockIntroCarousel,
  },
  {
    BlockType: Block.BlockFormDetail,
    component: BlockFormDetail,
  },
  {
    BlockType: Block.BlockOurClientsTestimonials,
    component: BlockOurClientsTestimonials,
  },
  {
    BlockType: Block.BlockBenefits,
    component: BlockBenefits,
  },
  {
    BlockType: Block.BlockServices,
    component: BlockServices,
  },
  {
    BlockType: Block.BlockPricing,
    component: BlockPricing,
  },
  {
    BlockType: Block.BlockProjectSteps,
    component: BlockProjectSteps,
  },
  {
    BlockType: Block.BlockServiceDescription,
    component: BlockServiceDescription,
  },
  {
    BlockType: Block.BlockOurProjects,
    component: BlockOurProject,
  },
  {
    BlockType: Block.BlockPreviewServices,
    component: BlockPreviewServices,
  },
  {
    BlockType: Block.BlockImageGallery,
    component: BlockImageGallery,
  },
  {
    BlockType: Block.BlockProjectDescription,
    component: BlockProjectDescription,
  },
  {
    BlockType: Block.BlockConstructiveDecisions,
    component: BlockConstructiveDecisions,
  },
]

export default components

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
import BlockWorkSteps from './BlockWorkSteps'
import BlockServiceDescription from './BlockServiceDescription'
import BlockOurWorks from './BlockOurWorks'
import BlockPreviewServices from './BlockPreviewServices'

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
    BlockType: Block.BlockWorkSteps,
    component: BlockWorkSteps,
  },
  {
    BlockType: Block.BlockServiceDescription,
    component: BlockServiceDescription,
  },
  {
    BlockType: Block.BlockOurWorks,
    component: BlockOurWorks,
  },
  {
    BlockType: Block.BlockPreviewServices,
    component: BlockPreviewServices,
  },
]

export default components

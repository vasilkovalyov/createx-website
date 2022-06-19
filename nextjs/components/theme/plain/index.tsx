import { Block } from '../../../enums/blocks'
import { IRegistryItem } from '../../../interfaces/blocks'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import BlockHero from './BlockHero'
import BlockFormDetail from './BlockFormDetail'
import BlockOurClientsTestimonials from './BlockOurClientsTestimonials'

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
    BlockType: Block.BlockFormDetail,
    component: BlockFormDetail,
  },
  {
    BlockType: Block.BlockOurClientsTestimonials,
    component: BlockOurClientsTestimonials,
  },
]

export default components

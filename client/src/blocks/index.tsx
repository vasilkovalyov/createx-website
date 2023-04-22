import { BlockEnum } from '@/utils/blockEnums'
import { IRegistryItem } from '@/interfaces/common'

import BlockHeroCarousel from './BlockHeroCarousel'
import BlockHero from './BlockHero'
import BlockServices from './BlockServices'

const components: IRegistryItem[] = [
  {
    BlockType: BlockEnum.BlockHeroCarousel,
    component: BlockHeroCarousel,
  },
  {
    BlockType: BlockEnum.BlockHero,
    component: BlockHero,
  },
  {
    BlockType: BlockEnum.BlockServices,
    component: BlockServices,
  },
]

export default components

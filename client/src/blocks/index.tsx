import { BlockEnum } from '@/utils/blockEnums'
import { IRegistryItem } from '@/interfaces/common'

import BlockHeroCarousel from './BlockHeroCarousel'
import BlockHero from './BlockHero'

const components: IRegistryItem[] = [
  {
    BlockType: BlockEnum.BlockHeroCarousel,
    component: BlockHeroCarousel,
  },
  {
    BlockType: BlockEnum.BlockHero,
    component: BlockHero,
  },
]

export default components

import { BlockEnum } from '@/utils/blockEnums'
import { IRegistryItem } from '@/interfaces/common'

import BlockHeroCarousel from './BlockHeroCarousel'

const components: IRegistryItem[] = [
  {
    BlockType: BlockEnum.BlockHeroCarousel,
    component: BlockHeroCarousel,
  },
]

export default components

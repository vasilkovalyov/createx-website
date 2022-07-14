import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockPricing } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { getBlockData } from 'utilities/blockData'

export default function BlockPricingBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockPricing)
  if (!blockData) return null

  const props = blockData as unknown as IBlockPricing

  return getComponent<IBlockPricing>(Block.BlockPricing, props)
}

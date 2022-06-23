import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockPricing } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockPricingBlock() {
  const [page] = usePage()

  if (!page?.pages || !page?.pages.data || !page.pages.data[0].attributes.Body?.length) return null

  const BlockPricingData = page.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockPricing) return item
  })[0]

  if (!BlockPricingData) return null

  const props = BlockPricingData as unknown as IBlockPricing

  return getComponent<IBlockPricing>(Block.BlockPricing, props)
}

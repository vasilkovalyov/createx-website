import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockWorkSteps } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockWorkStepsBlock() {
  const [page] = usePage()

  if (!page?.pages || !page?.pages.data || !page.pages.data[0].attributes.Body?.length) return null
  const BlockWorkStepsData = page.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockWorkSteps) return item
  })[0]

  if (!BlockWorkStepsData) return null

  const props = {
    ...BlockWorkStepsData,
  } as unknown as IBlockWorkSteps

  return getComponent<IBlockWorkSteps>(Block.BlockWorkSteps, props)
}

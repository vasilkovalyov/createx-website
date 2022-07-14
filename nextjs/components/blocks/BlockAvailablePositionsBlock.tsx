import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockAvailablePositions } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockAvailablePositionsBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const data = page?.pages.data[0].attributes.Body.filter((item) => item.BlockType === Block.BlockAvailablePositions)[0]
  if (!data) return null

  const props = {
    BlockType: data.BlockType,
    Items: data.Items,
    Aside: data.Aside,
  } as IBlockAvailablePositions
  console.log('props', props)

  return getComponent<IBlockAvailablePositions>(Block.BlockAvailablePositions, props)
}

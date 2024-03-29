import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockAvailablePositions } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockAvailablePositionsBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const data = page?.pages.data[0].attributes.Body.find((item) => item.BlockType === Block.BlockAvailablePositions)
  if (!data) return null

  const props = {
    BlockType: data.BlockType,
    Items: data.Items,
    Aside: data.Aside,
  } as IBlockAvailablePositions

  return getComponent<IBlockAvailablePositions>(Block.BlockAvailablePositions, props)
}

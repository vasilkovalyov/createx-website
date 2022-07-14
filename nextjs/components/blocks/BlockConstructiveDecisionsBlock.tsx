import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockConstructiveDecisions } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockConstructiveDecisionsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockConstructiveDecisions)
  if (!blockData) return null

  const image: IImage | null = getImageData(blockData.Image?.data || null, blockData.ImageAlt)

  const props = {
    BlockType: blockData.BlockType,
    Title: blockData?.Title,
    Overlay: blockData.Overlay,
    Reverse: blockData.Reverse,
    Image: image,
    RichText: blockData.RichText,
  } as IBlockConstructiveDecisions

  return getComponent<IBlockConstructiveDecisions>(Block.BlockConstructiveDecisions, props)
}

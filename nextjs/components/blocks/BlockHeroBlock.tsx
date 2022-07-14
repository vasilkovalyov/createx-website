import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockHeroBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockHero)
  if (!blockData) return null

  const image: IImage | null = getImageData(blockData.Image.data || null, blockData.ImageAlt)

  const props = {
    BlockType: blockData.BlockType,
    Title: blockData.Title,
    Image: image,
    Text: blockData.Text,
    Overlay: blockData.Overlay,
  } as unknown as IBlockHero
  return getComponent<IBlockHero>(Block.BlockHero, props)
}

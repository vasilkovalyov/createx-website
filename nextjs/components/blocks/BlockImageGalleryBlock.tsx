import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockImageGallery } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockImageGalleryBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockImageGallery)
  if (!blockData) return null

  const items = blockData.Items.map((item) => {
    const image: IImage | null = getImageData(item.Image.data || null, item.ImageAlt)
    return image
  })

  const props = {
    BlockType: blockData.BlockType,
    Items: items,
  } as unknown as IBlockImageGallery
  return getComponent<IBlockImageGallery>(Block.BlockImageGallery, props)
}

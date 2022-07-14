import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockTestimonial } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockTestimonialBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockTestimonial)
  if (!blockData) return null

  const image: IImage | null = getImageData(blockData.Image?.data || null, blockData.ImageAlt)
  const image2: IImage | null = getImageData(blockData.Image2?.data || null, blockData.ImageAlt)

  const props = {
    BlockType: blockData.BlockType,
    Name: blockData.Name,
    Position: blockData.Description,
    RichText: blockData.RichText,
    Image: image,
    Image2: image2,
  } as IBlockTestimonial

  return getComponent<IBlockTestimonial>(Block.BlockTestimonial, props)
}

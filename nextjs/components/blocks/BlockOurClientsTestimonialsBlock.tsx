import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurClientsTestimonials } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { ITestimonialField } from 'interfaces/fields'
import { IImage, ITestimonial } from 'interfaces/common'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockOurClientsTestimonialsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockOurClientsTestimonials)
  if (!blockData) return null

  const updatedItems = (items: ITestimonialField[]): ITestimonial[] => {
    return items.map((item) => {
      const image: IImage | null = getImageData(item.Image.data || null, item.ImageAlt)

      return {
        ...item,
        Image: image,
      }
    })
  }

  const image: IImage | null = getImageData(blockData.ClientImage?.data || null, blockData.ImageAlt)

  const props = {
    BlockType: blockData.BlockType,
    Title: blockData.Title,
    Image: image,
    Items: updatedItems(blockData.Items),
    Text: blockData.Text,
  } as IBlockOurClientsTestimonials

  return getComponent<IBlockOurClientsTestimonials>(Block.BlockOurClientsTestimonials, props)
}

import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurClientsTestimonials } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { ITestimonialField } from 'interfaces/fields'
import { IImage, ITestimonial } from 'interfaces/common'

export default function BlockOurClientsTestimonialsBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const blockOurClientsData = page?.pages.data[0].attributes.Body.filter(
    (item) => item.BlockType === Block.BlockOurClientsTestimonials,
  )[0]

  if (!blockOurClientsData) return null

  const updatedItems = (items: ITestimonialField[]): ITestimonial[] => {
    return items.map((item) => {
      return {
        ...item,
        Image: {
          Url: item.Image.data.attributes.url,
          Alt: item.ImageAlt,
        },
      }
    })
  }

  let Image: IImage | null
  if (blockOurClientsData.ClientImage?.data) {
    Image = {
      Url: blockOurClientsData.ClientImage?.data.attributes.url,
      Alt: blockOurClientsData.ImageAlt,
    }
  } else {
    Image = null
  }

  const props = {
    BlockType: blockOurClientsData.BlockType,
    Title: blockOurClientsData.Title,
    Image: Image,
    Items: updatedItems(blockOurClientsData.Items),
    Text: blockOurClientsData.Text,
  } as IBlockOurClientsTestimonials

  return getComponent<IBlockOurClientsTestimonials>(Block.BlockOurClientsTestimonials, props)
}

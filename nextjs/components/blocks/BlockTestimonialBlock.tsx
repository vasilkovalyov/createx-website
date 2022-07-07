import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockTestimonial } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'

export default function BlockTestimonialBlock() {
  const [page] = usePage()

  if (!page?.pages.data && !page?.pages.data[0].attributes.Body) return null

  const data = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockTestimonial) return item
  })[0]

  if (!data) return

  let Image: IImage | null
  let Image2: IImage | null
  if (data.Image.data) {
    Image = {
      Url: data.Image?.data.attributes.url,
      Alt: data.ImageAlt,
    }
  } else {
    Image = null
  }

  if (data.Image2.data) {
    Image2 = {
      Url: data.Image2?.data.attributes.url,
      Alt: data.Image2Alt,
    }
  } else {
    Image2 = null
  }

  const props = {
    BlockType: data.BlockType,
    Name: data.Name,
    Position: data.Description,
    RichText: data.RichText,
    Image: Image,
    Image2: Image2,
  } as IBlockTestimonial

  return getComponent<IBlockTestimonial>(Block.BlockTestimonial, props)
}

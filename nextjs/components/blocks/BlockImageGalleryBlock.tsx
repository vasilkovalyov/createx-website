import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockImageGallery } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'

export default function BlockImageGalleryBlock() {
  const [page] = usePage()

  if (!page?.pages.data && !page?.pages.data[0].attributes.Body) return null

  const data = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockImageGallery) {
      return item.BlockType === Block.BlockImageGallery
    }
  })[0]
  if (!data) return null

  const items = data.Items.map((item) => {
    let Image: IImage | null

    if (item.Image.data) {
      Image = {
        Url: item.Image.data.attributes.url,
        Alt: item.ImageAlt,
      }
    } else {
      Image = null
    }

    if (Image) {
      return Image
    }
  })

  const props = {
    BlockType: data.BlockType,
    Items: items,
  } as unknown as IBlockImageGallery
  return getComponent<IBlockImageGallery>(Block.BlockImageGallery, props)
}

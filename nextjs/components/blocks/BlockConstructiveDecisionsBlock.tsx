import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockConstructiveDecisions } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'

export default function BlockConstructiveDecisionsBlock() {
  const [page] = usePage()

  if (!page?.pages.data && !page?.pages.data[0].attributes.Body) return null

  const data = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockConstructiveDecisions) {
      return item.BlockType === Block.BlockConstructiveDecisions
    }
  })[0]

  if (!data) return

  let Image: IImage | null
  if (data.Image.data) {
    Image = {
      Url: data.Image?.data.attributes.url,
      Alt: data.ImageAlt,
    }
  } else {
    Image = null
  }

  const props = {
    BlockType: data.BlockType,
    Title: data?.Title,
    Overlay: data?.Overlay,
    Reverse: data?.Reverse,
    Image: Image,
    RichText: data.RichText,
  } as IBlockConstructiveDecisions

  return getComponent<IBlockConstructiveDecisions>(Block.BlockConstructiveDecisions, props)
}

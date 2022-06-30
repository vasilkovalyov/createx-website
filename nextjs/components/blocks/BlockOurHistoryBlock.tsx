import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurHistory } from '../../interfaces/blocks'
import { IImage, IHistory } from '../../interfaces/common'
import { Block } from '../../enums/blocks'

export default function BlockOurHistoryBlock() {
  const [page] = usePage()

  const data = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockOurHistory) {
      return item.BlockType === Block.BlockOurHistory
    }
  })[0]

  if (!data) return

  const items: IHistory[] = data.Items.map((item) => {
    let image: IImage | null
    if (item.Image.data) {
      image = {
        Url: item.Image.data.attributes.url,
        Alt: item.ImageAlt as string,
      }
    } else {
      image = null
    }

    return {
      id: item.id,
      Image: image,
      Text: item.Text,
      Date: item.Date,
    }
  })

  const props = {
    Title: data.Title,
    Items: items,
  } as IBlockOurHistory

  return getComponent<IBlockOurHistory>(Block.BlockOurHistory, props)
}

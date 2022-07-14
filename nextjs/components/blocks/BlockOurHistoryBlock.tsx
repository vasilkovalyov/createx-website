import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurHistory } from '../../interfaces/blocks'
import { IImage, IHistory } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockOurHistoryBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockOurHistory)
  if (!blockData) return null

  const items: IHistory[] = blockData.Items.map((item) => {
    const image: IImage | null = getImageData(item.Image.data || null, item.ImageAlt)

    return {
      id: item.id,
      Image: image,
      Text: item.Text,
      Date: item.Date,
    }
  })

  const props = {
    Title: blockData.Title,
    Items: items,
  } as IBlockOurHistory

  return getComponent<IBlockOurHistory>(Block.BlockOurHistory, props)
}

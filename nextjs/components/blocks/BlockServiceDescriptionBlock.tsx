import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockServiceDescription } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IAccordion, IImage } from '../../interfaces/common'

import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockServiceDescriptionBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockServiceDescription)
  if (!blockData) return null

  let items: IAccordion[] | []
  const Image: IImage | null = getImageData(blockData.Image?.data || null, blockData.ImageAlt)

  if (blockData.Items) {
    items = blockData.Items.map((item) => {
      return {
        id: item.id,
        Title: item.Title,
        Text: item.Text,
      }
    })
  } else {
    items = []
  }

  const props = {
    ...blockData,
    Items: items,
    Image: Image,
  } as unknown as IBlockServiceDescription

  return getComponent<IBlockServiceDescription>(Block.BlockServiceDescription, props)
}

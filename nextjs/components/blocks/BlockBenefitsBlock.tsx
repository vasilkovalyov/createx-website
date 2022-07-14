import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockBenefits } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IBenefit, IImage } from '../../interfaces/common'
import { IBenefitField } from 'interfaces/fields'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockBenefitsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockBenefits)
  if (!blockData) return null

  const items = (items: IBenefitField[]): IBenefit[] => {
    return items.map((item) => {
      const image: IImage | null = getImageData(item.Image.data || null, item.Image.ImageAlt)
      return {
        ...item,
        Image: image,
      }
    })
  }

  const props = {
    BlockType: blockData.BlockType,
    Title: blockData.Title,
    Text: blockData.Text,
    Theme: blockData.Theme,
    Items: items(blockData.Items),
  } as unknown as IBlockBenefits

  return getComponent<IBlockBenefits>(Block.BlockBenefits, props)
}

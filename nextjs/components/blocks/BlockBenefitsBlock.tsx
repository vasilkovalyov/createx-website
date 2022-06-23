import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockBenefits } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IBenefit, IImage } from '../../interfaces/common'
import { IBenefitField } from 'interfaces/fields'

export default function BlockBenefitsBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const blockBenefitsData = page?.pages.data[0].attributes.Body.filter(
    (item) => item.BlockType === Block.BlockBenefits,
  )[0]
  if (!blockBenefitsData) return null

  const items = (items: IBenefitField[]): IBenefit[] => {
    return items.map((item) => {
      let Image: IImage | null
      if (item.Image.data) {
        Image = {
          Url: item.Image.data.attributes.url,
          Alt: item.Image.ImageAlt,
        }
      } else {
        Image = null
      }
      return {
        ...item,
        Image: Image,
      }
    })
  }

  const props = {
    BlockType: blockBenefitsData.BlockType,
    Title: blockBenefitsData.Title,
    Text: blockBenefitsData.Text,
    Theme: blockBenefitsData.Theme,
    Items: items(blockBenefitsData.Items),
  } as unknown as IBlockBenefits

  return getComponent<IBlockBenefits>(Block.BlockBenefits, props)
}

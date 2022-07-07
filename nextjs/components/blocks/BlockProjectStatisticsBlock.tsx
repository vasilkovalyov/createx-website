import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockProjectStatistics } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IBenefit, IImage } from '../../interfaces/common'
import { IBenefitField } from 'interfaces/fields'

export default function BlockBenefitsBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const blockProjectStatisticsData = page?.pages.data[0].attributes.Body.filter(
    (item) => item.BlockType === Block.BlockProjectStatistics,
  )[0]
  if (!blockProjectStatisticsData) return null

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
    BlockType: blockProjectStatisticsData.BlockType,
    Title: blockProjectStatisticsData.Title,
    Text: blockProjectStatisticsData.Text,
    Theme: blockProjectStatisticsData.Theme,
    Items: items(blockProjectStatisticsData.Items),
  } as unknown as IBlockProjectStatistics

  return getComponent<IBlockProjectStatistics>(Block.BlockProjectStatistics, props)
}

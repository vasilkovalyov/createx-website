import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockIntroCarousel } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage, ILink } from '../../interfaces/common'
import { IImageField } from 'interfaces/fields'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockIntroCarouselBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockIntroCarousel)
  if (!blockData) return null

  let link: ILink | null
  if (blockData.PageLink.page.data) {
    link = {
      url: `${blockData.PageLink.page.data.attributes.Slug}`,
      text: blockData.PageLink.Name,
    }
  } else {
    link = null
  }

  const items = (items: IImageField[]): IImage[] | IImage => {
    return items.map((item) => {
      if (item.Image.data) {
        return {
          Url: item.Image.data.attributes.url,
          Alt: item.ImageAlt,
        }
      }
      return {
        Url: '',
        Alt: '',
      }
    })
  }

  const props = {
    BlockType: blockData.BlockType,
    Title: blockData.TitleIntroCarousel,
    Text: blockData.Text,
    Items: items(blockData.Items),
    Link: link,
  } as unknown as IBlockIntroCarousel

  return getComponent<IBlockIntroCarousel>(Block.BlockIntroCarousel, props)
}

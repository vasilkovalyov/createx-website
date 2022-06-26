import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockIntroCarousel } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage, ILink } from '../../interfaces/common'
import { IImageField } from 'interfaces/fields'

export default function BlockIntroCarouselBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const blockIntroCarouselData = page?.pages.data[0].attributes.Body.filter(
    (item) => item.BlockType === Block.BlockIntroCarousel,
  )[0]
  if (!blockIntroCarouselData) return null

  let link: ILink | null
  if (blockIntroCarouselData.PageLink.page.data) {
    link = {
      url: `${blockIntroCarouselData.PageLink.page.data.attributes.Slug}`,
      text: blockIntroCarouselData.PageLink.Name,
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
    BlockType: blockIntroCarouselData.BlockType,
    Title: blockIntroCarouselData.TitleIntroCarousel,
    Text: blockIntroCarouselData.Text,
    Items: items(blockIntroCarouselData.Items),
    Link: link,
  } as unknown as IBlockIntroCarousel

  return getComponent<IBlockIntroCarousel>(Block.BlockIntroCarousel, props)
}

import { usePage } from '@/context/page-context'
import { getComponent } from '../'
import { BlockEnum } from '@/utils/blockEnums'
import { IBlockHeroCarousel } from '@/blocks/BlockHeroCarousel/BlockHeroCarousel.type'
import { IImageUi } from '@/types/common'

import { ICmsBlockHeroCarousel } from './CmsBlockHeroCarousel.type'

function CmsBlockHeroCarousel({ Heading, Items, Text }: ICmsBlockHeroCarousel) {
  let items: IImageUi[] | object[] = []

  Items.forEach((item) => {
    const media = item.Media.data?.attributes
    if (media) {
      const image: IImageUi = {
        id: item.id,
        src: media.url,
        alt: item.Alt,
      }
      items.push(image)
    }
  })

  const props: IBlockHeroCarousel = {
    heading: Heading,
    text: Text,
    items: items as IImageUi[],
  }
  if (props.items.length) {
    return getComponent<IBlockHeroCarousel>(BlockEnum.BlockHeroCarousel, props)
  }
  return null
}

export default CmsBlockHeroCarousel

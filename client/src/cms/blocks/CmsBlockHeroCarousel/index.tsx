import { usePage } from '@/context/page-context'
import { getComponent } from '../'
import { BlockEnum } from '../../../utils/blockEnums'
import { IBlockHeroCarousel } from '../../../blocks/BlockHeroCarousel/BlockHeroCarousel.type'
import { IImageUi } from '@/types/common'

export default function CmsBlockHeroCarousel({}) {
  const { pages } = usePage()

  const data = pages.data[0].attributes.Body.filter((item) => item.Slug === BlockEnum.BlockHeroCarousel)[0]
  const items: IImageUi[] | object[] = []

  data.Items.forEach((item) => {
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
    heading: data.Heading,
    text: data.Text,
    items: items as IImageUi[],
  }

  if (props.items.length) {
    return getComponent<IBlockHeroCarousel>(BlockEnum.BlockHeroCarousel, props)
  }
}

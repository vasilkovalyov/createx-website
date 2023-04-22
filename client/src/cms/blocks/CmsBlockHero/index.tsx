import { usePage } from '@/context/page-context'
import { getComponent } from '../'
import { BlockEnum } from '@/utils/blockEnums'
import { IBlockHero } from '@/blocks/BlockHero/BlockHero.type'
import { ICmsBlockHeroCarousel } from './CmsBlockHero.type'
import { IImageUi } from '@/types/common'

export default function CmsBlockHero() {
  const { pages } = usePage()

  const data = pages.data[0].attributes.Body.filter(
    (item) => item.Slug === BlockEnum.BlockHero,
  )[0] as ICmsBlockHeroCarousel

  let image: IImageUi | null = null

  if (data.Image.Media.data) {
    const media = data.Image.Media.data.attributes
    image = {
      src: media.url,
      alt: data.Image.Alt,
    }
  }

  const props: IBlockHero = {
    heading: data.Heading,
    text: data.Text,
    image: image,
  }

  return getComponent<IBlockHero>(BlockEnum.BlockHero, props)
}

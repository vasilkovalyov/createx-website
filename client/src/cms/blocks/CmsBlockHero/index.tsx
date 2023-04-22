import { getComponent } from '../'
import { BlockEnum } from '@/utils/blockEnums'
import { IBlockHero } from '@/blocks/BlockHero/BlockHero.type'
import { ICmsBlockHeroCarousel } from './CmsBlockHero.type'
import { IImageUi } from '@/types/common'

export default function CmsBlockHero({ Heading, Image, Text }: ICmsBlockHeroCarousel) {
  let image: IImageUi | null = null

  if (Image.Media.data) {
    const media = Image.Media.data.attributes
    image = {
      src: media.url,
      alt: Image.Alt,
    }
  }

  const props: IBlockHero = {
    heading: Heading,
    text: Text,
    image: image,
    children: <div>1</div>,
  }

  return getComponent<IBlockHero>(BlockEnum.BlockHero, props)
}

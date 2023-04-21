import { ICmsMediaImage } from '@/cms/interfaces/common'

export interface ICmsBlockHeroCarousel {
  Slug: string
  Heading: string
  Text: string
  Items: ICmsMediaImage[] | []
}

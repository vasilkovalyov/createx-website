import { ICmsMediaImage } from '@/cms/interfaces/common'
import { IBreadcrumbItem } from '@/components/Breadcrumbs/Breadcrumbs.type'

export interface ICmsBlockHeroCarousel {
  Slug: string
  Heading: string
  Text?: string
  Image: ICmsMediaImage
  breadcrumbs?: IBreadcrumbItem[] | null
}

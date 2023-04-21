import { ICmsMediaImage, ICmsPageSeo } from '@/cms/interfaces/common'

export interface ICmsBlockHeader {
  Logo: ICmsMediaImage
  Slug: string
  pages: {
    data: {
      attributes: ICmsPageNavigation[] | []
    }
  }
}

interface ICmsPageNavigation {
  Heading: string
  Slug: string
  Seo: ICmsPageSeo
}

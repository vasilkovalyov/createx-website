import { ICmsMediaImage, ICmsPageSeo } from '@/cms/interfaces/common'

export interface ICmsBlockHeader {
  Logo: ICmsMediaImage
  Slug: string
  pages: {
    data:
      | {
          id: string
          attributes: ICmsNavigation
        }[]
      | null
  }
}

interface ICmsNavigation {
  Heading: string
  Slug: string
}

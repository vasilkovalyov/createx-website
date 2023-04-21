import { ICmsMediaImage } from '@/cms/interfaces/common'

export interface ICmsBlockHeader {
  Slug: string
  Logo: ICmsMediaImage
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

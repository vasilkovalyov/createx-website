import { ICmsBlockHeader } from '@/cms/blocks/CmsBlockHeader/CmsBlockHeader.type'
import { ICmsPageSeo } from '@/cms/interfaces/common'

export interface PageResponseProps {
  header: {
    data: {
      attributes: ICmsBlockHeader
    }
  }
  pages: {
    data: {
      attributes: {
        Heading: string
        Slug: string
        Seo: ICmsPageSeo
      }
    }[]
  }
}

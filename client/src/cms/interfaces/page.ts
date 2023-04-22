import { ICmsBlockHeader } from '../blocks/CmsBlockHeader/CmsBlockHeader.type'
import { ICmsPageSeo, ICmsMediaImage } from './common'
import { ICmsBlockHeroCarousel } from '../blocks/CmsBlockHeroCarousel/CmsBlockHeroCarousel.type'

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
        Body: FieldAttributes[]
      }
    }[]
  }
}

export interface FieldAttributes {
  id: string
  Slug: string
  Heading: string
  Text: string
  Image: ICmsMediaImage
  Media: {
    data: {
      attributes: {
        url: string
        width: number
        height: number
        formats?: any | null
      }
    } | null
  }
  Alt: string
  Items: FieldAttributes[] | []
}

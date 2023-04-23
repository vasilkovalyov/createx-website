import { ICmsBlockHeader } from '../blocks/CmsBlockHeader/CmsBlockHeader.type'
import { ICmsPageSeo, ICmsMediaImage } from './common'

export interface PageResponseProps {
  header: {
    data: {
      attributes: ICmsBlockHeader
    }
  }
  pageServices: {
    data: ICmsPageServices[] | []
  }
  pages: IPage
}

export interface ICmsPageServices {
  id: string
  attributes: {
    Heading: string
    Slug: string
    Text: string
    Image: ICmsMediaImage
    page: {
      data: {
        attributes: {
          Slug: string
        }
      }
    }
  }
}

export interface IPage {
  data: {
    id: string
    attributes: IPageAttributes
  }[]
}

export interface IPageAttributes {
  Heading: string
  Slug: string
  Seo?: ICmsPageSeo | null
  Body: FieldAttributes[] | []
  page_services: IPage
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
  page: {
    data: {
      attributes: {
        Slug: string
      }
    }
  }
}

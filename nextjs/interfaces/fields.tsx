import { Identificator } from '../types/common'
import { IContactInformation, ISocialList } from './common'

export interface FieldAttributes {
  [x: string]: any
  id?: Identificator
  BlockType?: string
  Slug: string
  Name: string
  Title: string
  Text: string
  Image: IImageField
  Overlay: boolean | null
}

export interface IImageField {
  data: any
  Image: {
    id?: Identificator
    data: {
      attributes: {
        url: string
        width?: string | number
        height?: string | number
      }
    }
  }
  ImageAlt: string
}

export interface IPageField {
  NODE_ENV: string
  blockHeader: {
    data: {
      attributes: IHeaderBlockField
    }
  }
  blockFormDetail: {
    data: {
      attributes: IHeaderBlockField
    }
  }
  blockFooter: {
    data: {
      attributes: IFooterBlockField
    }
  }
  pages: {
    data: {
      attributes: {
        Body: FieldAttributes[]
        ShowFormDetails: boolean
        Slug: string
      }
    }[]
  }
}


export interface IBlockFormDetailField extends IImageField {
  BlockType: string
}

export interface IHeaderBlockField extends IImageField {
  BlockType: string
  Menu: IMenuField
}

export interface IFooterBlockField extends IImageField {
  BlockType: string
  Menu: IMenuField[]
  Text: string
  ContactInformation: IContactInformation
  SocialList: ISocialList
  SubscribeForm: boolean
}

export interface IDataFields {
  id?: Identificator
  data: {
    attributes: FieldAttributes
  }
}

export interface IMenuField {
  id?: Identificator
  Name?: string
  pages: {
    data: {
      id?: Identificator
      attributes: Pick<FieldAttributes, 'Slug' | 'Name'>
    }[]
  }
}


export interface ITestimonialField extends IImageField {
  id?: Identificator
  Name: string
  Position: string
  Text: string
}
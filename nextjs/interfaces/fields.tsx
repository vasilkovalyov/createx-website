import { ColorTheme, Identificator } from '../types/common'
import { IBenefit, IContactInformation, ISocialList } from './common'

export interface FieldAttributes<T> {
  [x: string]: any
  id?: Identificator
  BlockType?: string
  Slug: string
  Name: string
  Title: string
  TitleIntroCarousel: string
  PageLink: IMenuItemField
  Items: T[]
  Theme?: ColorTheme
  Text: string
  Image: IImageFieldData
  ImageAlt: string
  ClientImage?: IImageFieldData
  ClientImageAlt?: string
  Overlay?: boolean | null
}

export interface IImageFieldData {
  id?: Identificator
  data: {
    attributes: {
      url: string
      width?: string | number
      height?: string | number
    }
  }
}

export interface IImageField {
  data: any
  Image: IImageFieldData
  ImageAlt: string
}

export interface IPageDataField {
  data: {
    attributes: FieldAttributes<any>[] & {
      ContentType: string
      BreadCrumbs: IMenuDataField 
      Body: FieldAttributes<any>[]
      ShowFormDetails: boolean
      Slug: string
      BlockHero: FieldAttributes<any>
    }
  }[]
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
  pages: IPageDataField
  servicePages: IPageDataField
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
    attributes: FieldAttributes<any>
  }
}

export interface IMenuDataField {
  data: {
    id?: Identificator
    attributes: Pick<FieldAttributes<any>, 'Slug' | 'Name'>
  }[]
}

export interface IMenuField {
  id?: Identificator
  Name?: string
  pages: IMenuDataField
}

export interface IMenuItemField extends Pick<IMenuField, 'id' |'Name'>{
  page: {
    data: {
      id?: Identificator
      attributes: Pick<FieldAttributes<any>, 'Slug' | 'Name'>
    }
  }
}


export interface ITestimonialField {
  [x: string]: any
  id?: Identificator
  Name: string
  Position: string
  Text: string
}

export interface IBenefitField extends Pick<IBenefit, 'Title' | 'Text' | 'id'> {
  Image: IImageField
}


export interface IItemField {
  id?: Identificator
  attributes: {
    Title: string
    Text: string
    Image: IImageFieldData
    ImageAlt: string
    Link: IMenuItemField
  }
}
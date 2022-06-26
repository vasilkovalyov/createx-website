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
  Link: IMenuItemField
  Theme?: ColorTheme
  Text: string
  Image: {
    id?: Identificator
    data?: IImageFieldData
  }
  ImageAlt: string
  ServiceDescriptionImageAlt?: string
  ClientImage?: {
    id?: Identificator
    data?: IImageFieldData
  }
  ClientImageAlt?: string
  Overlay?: boolean | null
  BreadCrumbs: IBreadCrumbsField
}

export interface IImageFieldData {
  attributes: {
    url: string
    width?: string | number
    height?: string | number
  }
}

export interface IImageField {
  data: any
  Image: {
    id?: Identificator
    data?: IImageFieldData
  }
  ImageAlt: string
}

export interface IBreadCrumbsField {
  // [x: string]: any
  pages: IMenuDataFields
  inner_page?: IMenuDataField
  activePage: IMenuDataField
}

export interface IPageDataField {
  data: {
    attributes: FieldAttributes<any>[] & {
      ContentType: string
      BreadCrumbs: IBreadCrumbsField | null
      BreadCrumbsInner: IBreadCrumbsField | null
      Body?: FieldAttributes<any>[] | null
      ShowFormDetails: boolean
      Slug: string
      BlockHero: FieldAttributes<any>
      work_page: {
        data: {
          attributes: {
            CategoryName: string
            CategorySlug: string
          }
        }
      }
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
  services: IServiceFields | null
  projectCategory: ICategoryFields | null
  works: IProjectFields | null
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

export interface IDataField {
  id?: Identificator
  data: {
    attributes: FieldAttributes<any>
  }
}

export interface IDataFields {
  id?: Identificator
  data: {
    attributes: FieldAttributes<any>
  }[]
}

export interface IMenuDataFields {
  data: {
    id?: Identificator
    attributes: Pick<FieldAttributes<any>, 'Slug' | 'Name'>
  }[]
}

export interface IMenuDataField {
  data: {
    id?: Identificator
    attributes: Pick<FieldAttributes<any>, 'Slug' | 'Name'>
  }
}

export interface IMenuField {
  id?: Identificator
  Name?: string
  pages: IMenuDataFields
}

export interface IMenuItemField extends Pick<IMenuField, 'id' | 'Name'> {
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

export interface IServiceFields {
  data: {
    id?: Identificator
    attributes: {
      Title: string
      Slug: string
      SlugText: string
      Text: string
      PreviewImage: {
        id?: Identificator
        data?: IImageFieldData
      }
      PreviewImageSmall: {
        id?: Identificator
        data?: IImageFieldData
      }
      PreviewLogoPrimary: {
        id?: Identificator
        data?: IImageFieldData
      }
      PreviewLogoSecondary: {
        id?: Identificator
        data?: IImageFieldData
      }
      ImageAlt: string
      page: {
        data: {
          attributes: {
            Slug
          }
        }
      }
    }
  }[]
}

export interface IProjectFields {
  data: {
    id?: Identificator
    attributes: {
      Title: string
      Text: string
      Image: {
        id?: Identificator
        data?: IImageFieldData
      }
      ImageAlt: string
      Link: {
        Name: string
        Slug: {
          data: {
            attributes: {
              Slug
            }
          }
        }
      }
    }
  }[]
}

export interface ICategoryFields {
  data: {
    attributes: {
      Items: {
        id: Identificator
        Name: string
        Slug: string
        Image: IImageField
        Image2: IImageField
        ImageAlt: string
      }[]
    }
  }
}

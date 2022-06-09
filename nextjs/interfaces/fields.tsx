import { Identificator } from '../types/common'

export interface FieldAttributes {
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
  blockHeader: {
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
        Slug: string
      }
    }[]
  }
}

export interface IHeaderBlockField extends IImageField {
  BlockType: string
  Menu: IMenuField
  Slug: string
}

export interface IFooterBlockField extends IImageField {
  BlockType: string
  Menu: IMenuField[]
  Slug: string
  Text: string
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

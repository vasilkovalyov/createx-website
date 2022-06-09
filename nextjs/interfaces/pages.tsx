import { Identificator } from '../types/common'
import { IImage } from '../interfaces/common'

export interface ISeo {
  id?: Identificator
  Title: string
  Keywords: string[]
  Description: string
}

export interface IMenuItem {
  Slug: string
  Name: string
}

export interface IMenu {
  id?: Identificator | null
  Name?: string | null
  pages: IMenuItem[]
}

export interface IHeader {
  BlockType: string
  Image?: IImage | null
  Menu?: IMenu | null
}

export interface IFooter {
  BlockType: string
  Image: IImage
  Menu?: IMenu[] | null
  Text: string
}

export interface IContentBlock {
  id: Identificator
  BlockType: string
  Title: string
  Text: string
  Image: IImage
  ImageAlt: string
  Overlay: boolean
}

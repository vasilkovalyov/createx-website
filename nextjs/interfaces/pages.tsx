import { Identificator } from '../types/common'
import { IContactInformation, IImage, ISocialList } from '../interfaces/common'
import { Block } from 'enums/blocks'

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
  BlockType: Block
  Image?: IImage | null
  Menu?: IMenu | null
}

export interface IFooter {
  BlockType: Block
  Image: IImage | null
  Menu?: IMenu[] | null
  Text: string
  ContactInformation: IContactInformation
  SocialList?: ISocialList
  SubscribeForm: boolean
}

export interface IContentBlock {
  id: Identificator
  BlockType: Block
  Title: string
  Text: string
  Image: IImage
  ImageAlt: string
  Overlay: boolean
}

export interface IBlockFormDetail {
  BlockType: Block
  Image: IImage | null
}

import { IImage, IBenefit, IContactInformation } from './common'
import { Block } from '../enums/blocks'
import { ColorTheme, Identificator } from '../types/common'
import { IList, ILink, IProject, ITestimonial } from './common'

export interface IBlockHero {
  Image: IImage
  Title?: string
  Text?: string
  Overlay?: boolean
}

export interface IBlockBenefits {
  BlockType: Block
  Title: string
  Text?: string
  Theme?: ColorTheme
  Items: IBenefit[]
}

export interface IBlockConstructiveDecisions {
  Overlay?: boolean
  BlockType: Block
  Title: string
  List: IList
  Image?: IImage
  Reverse?: boolean
}

export interface IBlockProps {
  BlockType: Block
}

export interface IRegistryItem {
  BlockType: Block
  component: unknown
}

export interface IBlockIntroCarousel {
  BlockType: Block
  Title: string
  Text?: string
  Link?: ILink
  Items: IImage[]
}

export interface IBlockLatestProjects {
  BlockType: Block
  Title: string
  Items: IProject[]
  Text?: string
  Link?: ILink
}

export interface IBlockOurClientsTestimonials {
  BlockType: Block
  Title: string
  Image: IImage
  Items: ITestimonial[]
}

export interface IHistory {
  id: Identificator
  Image: IImage
  Text: string
  Date: string
}

export interface IBlockOurHistory {
  BlockType: Block
  Title: string
  Items: IHistory[]
}

export interface IBlockImageGallery {
  BlockType: Block
  Items: IImage[]
}

interface IOurOffice extends IContactInformation {
  id: Identificator
  Title: string
}

export interface IBlockOurOffices {
  BlockType: Block
  Title: string
  Text: string
  Items: IOurOffice[]
}
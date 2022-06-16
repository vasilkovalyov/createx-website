import { IImage, IBenefit } from './common'
import { Block } from '../enums/blocks'
import { ColorTheme } from '../types/common'
import { IList, ILink, IProject } from './common'

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
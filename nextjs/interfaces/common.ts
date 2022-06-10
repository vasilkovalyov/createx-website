import { Identificator, ColSize, GridItemsAlignment, GridJustify, ServiceType, SocialIconSize } from '../types/common'
import { HeadingLevel } from '../enums/common'
import { SocialIcon } from '../enums/icons'

export interface IImage {
  id?: Identificator
  Url: string
  Alt: string
  className?: string
}

export interface ITypography {
  level?: HeadingLevel
  className?: string
  text: string
}

export interface ILink {
  text?: string
  url: string
  target?: string
}

export interface IRow {
  alignItems?: GridItemsAlignment
  justify?: GridJustify
  children: React.ReactNode
  className?: string
}

export interface ICol {
  base?: ColSize | null
  sm?: ColSize | null
  md?: ColSize | null
  lg?: ColSize | null
  xl?: ColSize | null
  children: React.ReactNode
  className?: string
}

export interface IButton {
  url?: string
  className?: string
  outline?: boolean
  name?: string
  onClick?: () => void
}

export interface IService {
  id?: Identificator
  type: ServiceType
  reverse?: boolean
  Image: IImage
  Logo?: IImage
  Logo2?: IImage
  Title: string
  Text?: string
  Link?: ILink
}

export interface IProject {
  id?: Identificator
  Image: IImage
  Title: string
  Description: string
  Link?: ILink
}

export interface IBenefit {
  id?: Identificator
  Image: IImage
  Title: string
  Text: string
  className?: string
}

export interface IPerson {
  id?: Identificator
  Image: IImage
  Title: string
  Description: string
  Socials: {
    Items: ISocialLink[]
  } 
}

export interface ISocialLink {
  id?: Identificator
  Url: string
  Icon: SocialIcon
}

export interface ISocialList {
  Items: ISocialLink[]
  className?: string
  size?: SocialIconSize
}

export interface INewsPost {
  id?: Identificator
  IsCompact?: boolean
  Image?: IImage
  Title: string
  Text?: string
  Category: string
  Date: string
  Slug: string
}

export interface ITestimonial {
  id?: Identificator
  Image?: IImage
  Image2?: IImage
  Text: string
  Name: string
  Position?: string
}
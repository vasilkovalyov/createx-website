import {
  Identificator, ColSize, GridItemsAlignment, GridJustify, ServiceType, SocialIconSize, AlignContentType, HeadingLevel, ColorTheme, TextSize, ListType
} from '../types/common'
import { SocialIcon, EnumsIcon } from '../enums/icons'

import { SwiperOptions } from 'swiper'

export interface IImage {
  id?: Identificator
  Url: string
  Alt: string
  className?: string
}

export interface IList {
  type?: ListType
  className?: string
  icon: EnumsIcon
  Items: {
    id?: Identificator
    Text: string
  }[]
}

export interface IIcon {
  icon: EnumsIcon
  className?: string
}

export interface ITypography {
  level?: HeadingLevel
  className?: string
  text: string
  aligned?: AlignContentType
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
  color?: 'white' | 'primary'
  name?: string
  size?: 'small' | 'extra-small' | ''
  fullwidth?: boolean
  onClick?: () => void
}

export interface IBlockHeading {
  Title?: string,
  Text?: string,
  headingLevel?: HeadingLevel,
  textSize?: TextSize
  aligned?: AlignContentType
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
  Link?: ILink | null
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
  Target: string
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


export interface IContactInformation {
  Theme?: ColorTheme
  className?: string
  Title?: string
  Address?: string
  Phone?: string
  Email?: string
  Schedule?: string
}

export interface IOfficeAddress extends Omit<IContactInformation, 'Theme' | 'className'> {
  Title: string
}

export interface ICarousel {
  slides: React.ReactNode[]
  className?: string
  useCustomNavigation?: boolean
  settings?: SwiperOptions
  typeButton?: 'primary' | 'secondary'
}

export interface IPosition {
  Location: string
  WorkTime: string
  Title: string
  Link: ILink
}

export interface IProjectDescription {
  Items: {
    id: Identificator
    Title: string
    Text: string
  }[]
}

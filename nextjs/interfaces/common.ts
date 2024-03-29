import {
  Identificator,
  ColSize,
  GridItemsAlignment,
  GridJustify,
  ServiceType,
  SocialIconSize,
  AlignContentType,
  HeadingLevel,
  ColorTheme,
  TextSize,
  ListType,
} from '../types/common'
import { SocialIcon, EnumsIcon } from '../enums/icons'

import { SwiperOptions } from 'swiper'
import { IMenuItem } from './pages'

export interface IImage {
  id?: Identificator
  Url: string
  Alt: string
  width?: string
  height?: string
  className?: string
}

export interface IBreadcrumbs {
  pages: IMenuItem[]
  inner_page?: IMenuItem | null
  activePage: string
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
  type?: 'outline' | '' | 'transparent'
  color?: 'white' | 'primary'
  name?: string
  uppercase?: boolean
  size?: 'small' | 'extra-small' | ''
  fullwidth?: boolean
  onClick?: (e?: React.MouseEventHandler<HTMLButtonElement>) => void
}

export interface IBlockHeading {
  Title?: string
  Text?: string
  headingLevel?: HeadingLevel
  textSize?: TextSize
  aligned?: AlignContentType
  className?: string
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
  Image?: IImage
  Title: string
  Text: string
  Link?: ILink
  category: string
}

export interface IBenefit {
  id?: Identificator
  Image?: IImage | null
  Title: string
  Text?: string
  className?: string
}

export interface IPerson {
  id?: Identificator
  Image?: IImage
  Title: string
  Text: string
  Socials?: ISocialLink[]
}

export interface ISocialLink {
  id?: Identificator
  Url: string
  Icon: SocialIcon
  Target?: string
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
  Categories: Category[]
  Date: string
  Slug: string
  Link: ILink
}

export interface Category {
  Title: string
  Name: string
}

export interface ITestimonial {
  id?: Identificator
  Image?: IImage | null
  Image2?: IImage | null
  Text?: string
  RichText?: string
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
  id?: Identificator
  Location: string
  TypeWork: string
  Title: string
  Link: ILink
}

export interface IProjectDescription {
  id: Identificator
  Title: string
  Text: string
}

export interface IAccordion {
  Title: string
  Text: string
  className?: string
  isOpen?: boolean
}

export interface IProjectCategoriesList {
  Items: IProjectCategories[]
  onClick?: (value: string) => void
}

export interface IProjectCategories {
  id: Identificator
  Title: string
  Name: string
  Image?: IImage | null
  Image2?: IImage | null
}

export interface INewsCategories {
  id: Identificator
  Title: string
  Name: string
}

export interface IHistory {
  id?: Identificator
  Image?: IImage | null
  Text?: string
  Date: string
}

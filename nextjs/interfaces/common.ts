import { Identificator, ColSize, GridItemsAlignment, GridJustify, ServiceType } from '../types/common'
import { HeadingLevel } from '../enums/common'

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
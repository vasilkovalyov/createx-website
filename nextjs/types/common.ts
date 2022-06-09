import { HeadingLevel, EnumsIcon } from '../enums/common'
import { IHeader, IFooter } from '../interfaces/pages'

export type Identificator = string
export type DateType = string
export type IconType = EnumsIcon | undefined | string
export type HighHeadingType = HeadingLevel.H2 | HeadingLevel.H3 | HeadingLevel.H4
export type AlignContentType = 'center' | 'right'
export type ContainerWidthType = 'medium' | 'large'
export type OrientType = 'vertical' | 'horizontal'

export type GridSizes = 'sm' | 'md' | 'lg' | 'xl'
export type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
export type GridJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'

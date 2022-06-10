import { HeadingLevel } from '../enums/common'
import { EnumsIcon } from '../enums/icons'
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

export type ServiceType = 'card' | 'post'

export type SocialIconSize = 'small' | 'middle' | 'large'

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>> 
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]
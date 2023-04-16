import { ImageUiType } from '@/types/common'

export interface IProductPreview {
  image?: ImageUiType
  heading: string
  category: string
  href: string
  linkText?: string
  className?: string
}

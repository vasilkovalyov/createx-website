import { IImageUi } from '@/types/common'

export interface IProductPreview {
  image?: IImageUi
  heading: string
  category: string
  href: string
  linkText?: string
  className?: string
}

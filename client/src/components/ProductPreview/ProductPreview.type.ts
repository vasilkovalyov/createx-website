import { IImageUi } from '@/types/common'

export interface IProductPreview {
  id: string
  image?: IImageUi
  heading: string
  category: string
  href: string
  linkText?: string
  className?: string
}

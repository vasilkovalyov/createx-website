import { IImageUi } from '@/types/common'

export interface INewsPost {
  image?: IImageUi
  heading: string
  href: string
  category: string
  date: string
  text?: string
  className?: string
}

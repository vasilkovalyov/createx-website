import { IImageUi } from '@/types/common'

export interface INewsPost {
  id: string
  image?: IImageUi
  heading: string
  href: string
  category: string
  date: string
  text?: string
  className?: string
  size?: NewsPostSizeType
}

export type NewsPostSizeType = 'small'

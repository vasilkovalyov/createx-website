import { IImageUi } from '@/types/common'

export interface IService {
  image?: IImageUi
  heading: string
  text?: string
  href: string
  linkText?: string
  className?: string
  reversed?: boolean
}

import { ImageUiType } from '@/types/common'

export interface IService {
  image?: ImageUiType
  heading: string
  text?: string
  href: string
  linkText?: string
  className?: string
  reversed?: boolean
}

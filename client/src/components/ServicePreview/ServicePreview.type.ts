import { IImageUi } from '@/types/common'

export interface IServicePreview {
  image?: IImageUi
  logo?: IImageUi
  logo2?: IImageUi
  heading: string
  className?: string
  href?: string
}

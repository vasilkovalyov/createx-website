import { IImageUi } from '@/types/common'

export interface IServicePreview {
  id: string
  image?: IImageUi
  logo?: IImageUi
  logo2?: IImageUi
  heading: string
  className?: string
  href?: string
}

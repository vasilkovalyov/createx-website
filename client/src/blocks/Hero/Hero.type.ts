import { IImageUi } from '@/types/common'

export interface IHero {
  image?: IImageUi
  heading: string
  text: string
  className?: string
}

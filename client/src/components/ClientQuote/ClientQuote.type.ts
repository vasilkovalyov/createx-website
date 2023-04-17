import { IImageUi } from '@/types/common'

export interface IClientQuote {
  image: IImageUi
  text: string
  name: string
  position: string
  className?: string
}

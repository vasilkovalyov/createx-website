import { IImageUi } from '@/types/common'

export interface IClientQuote {
  id: string
  image: IImageUi
  text: string
  name: string
  position: string
  className?: string
}

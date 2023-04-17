import { IImageUi, ThemeType } from '@/types/common'

export interface IBenefit {
  id: string
  image?: IImageUi
  heading?: string
  text?: string
  className?: string
  theme?: ThemeType
}

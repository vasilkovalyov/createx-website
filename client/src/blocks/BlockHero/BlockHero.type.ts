import { IImageUi } from '../../types/common'

export interface IBlockHero {
  image?: IImageUi | null
  heading: string
  text?: string
  className?: string
  children?: React.ReactNode
}

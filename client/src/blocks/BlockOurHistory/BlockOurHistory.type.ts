import { IImageUi } from '../../types/common'

export interface IBlockOurHistory {
  heading: string
  items: IOurHistory[] | []
  className?: string
}

export interface IOurHistory {
  id: string
  image: IImageUi
  text?: string
  date: string
}

import { IImageUi } from '../../types/common'

export interface IBlockImageGallery {
  items: IImageGallery[]
  className?: string
}

interface IImageGallery extends IImageUi {
  id: string
}

import { MouseEvent } from 'react'
import { IImageUi } from '@/types/common'

export interface IWorkCategory {
  logo: IImageUi
  logo2: IImageUi
  category: string
  className?: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

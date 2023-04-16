import { StaticImageData } from 'next/image'

export interface ImageUiType extends Omit<StaticImageData, 'width' | 'height'> {
  id?: string
  alt: string
  width?: number
  height?: number
}

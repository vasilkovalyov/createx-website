import { StaticImageData } from 'next/image'

export interface IImageUi extends Omit<StaticImageData, 'width' | 'height'> {
  id?: string
  alt: string
  width?: number
  height?: number
}

export type SocialType = {
  icon: string
  href: string
}

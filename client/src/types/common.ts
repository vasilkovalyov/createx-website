import { StaticImageData } from 'next/image'
import { SocialIcon } from './icons'

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

export type ThemeType = 'light' | 'dark'

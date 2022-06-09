import { IImage } from './common'
import { Block } from '../enums/blocks'

export interface IBlockHero {
  Image: IImage
  Title?: string
  Text?: string
  Overlay: boolean | null
}

export interface IBlockProps {
  BlockType: Block
}

export type IRegistryItem = {
  BlockType: Block
  component: unknown
}

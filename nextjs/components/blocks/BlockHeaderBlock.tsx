import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IHeader } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from '../../interfaces/common'

import { getConvertMenu } from '../../utilities/convertDataFromBackend'

export default function BlockHeaderBlock() {
  const ctx = useContext(PageProvider)
  if (!ctx) return null

  const BlockType = ctx.blockHeader.data.attributes.BlockType
  const image = {
    Url: ctx.blockHeader.data.attributes.Image?.data.attributes.url,
    Alt: ctx.blockHeader.data.attributes.ImageAlt,
  } as IImage
  const menu = ctx.blockHeader.data.attributes.Menu
  const convertedMenu = getConvertMenu(menu) || null

  const props: IHeader = {
    BlockType: BlockType,
    Image: image,
    Menu: convertedMenu,
  }

  return getComponent<IHeader>(Block.BlockHeader, props)
}

import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IFooter } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from '../../interfaces/common'

import { getConvertMenuArray } from '../../utilities/convertDataFromBackend'

export default function BlockFooterBlock() {
  const ctx = useContext(PageProvider)
  if (!ctx) return null

  const BlockType = ctx.blockFooter.data.attributes.BlockType
  const image = {
    Url: ctx.blockFooter.data.attributes.Image?.data.attributes.url,
    Alt: ctx.blockFooter.data.attributes.ImageAlt,
  } as IImage
  const text = ctx.blockFooter.data.attributes.Text
  const menu = ctx.blockFooter.data.attributes.Menu
  const convertedMenu = getConvertMenuArray(menu) || null

  const props: IFooter = {
    BlockType: BlockType,
    Image: image,
    Text: text,
    Menu: convertedMenu,
  }

  return getComponent<IFooter>(Block.BlockFooter, props)
}

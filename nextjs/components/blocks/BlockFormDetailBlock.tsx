import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockFormDetail } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'

export default function BlockFormDetailBlock() {
  const ctx = useContext(PageProvider)
  if (!ctx) return null
  if (!ctx.blockFormDetail.data) return null

  const BlockType = ctx.blockFormDetail.data.attributes.BlockType
  const image = {
    Url: ctx.blockFormDetail.data.attributes.Image?.data.attributes.url,
    Alt: ctx.blockFormDetail.data.attributes.ImageAlt,
  } as IImage

  const props: IBlockFormDetail = {
    BlockType: BlockType as Block,
    Image: image,
  }

  return getComponent<IBlockFormDetail>(Block.BlockFormDetail, props)
}

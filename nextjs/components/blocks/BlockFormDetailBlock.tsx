import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockFormDetail } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'

export default function BlockFormDetailBlock() {
  const [page] = usePage()
  if (!page) return null
  if (!page.blockFormDetail.data) return null

  const BlockType = page.blockFormDetail.data.attributes.BlockType
  let Image: IImage | null
  if (page.blockFormDetail.data.attributes.Image.data) {
    Image = {
      Url: page.blockFormDetail.data.attributes.Image?.data.attributes.url,
      Alt: page.blockFormDetail.data.attributes.ImageAlt,
    }
  } else {
    Image = null
  }

  const props: IBlockFormDetail = {
    BlockType: BlockType as Block,
    Image: Image,
  }

  return getComponent<IBlockFormDetail>(Block.BlockFormDetail, props)
}

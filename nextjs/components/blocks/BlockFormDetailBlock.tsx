import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockFormDetail } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'
import { getImageData } from 'utilities/blockData'

export default function BlockFormDetailBlock() {
  const [page] = usePage()

  if (!page) return null
  if (!page.blockFormDetail.data) return null

  const BlockType = page.blockFormDetail.data.attributes.BlockType
  const image: IImage | null = getImageData(
    page.blockFormDetail.data.attributes.Image?.data || null,
    page.blockFormDetail.data.attributes.ImageAlt,
  )

  const props: IBlockFormDetail = {
    BlockType: BlockType as Block,
    Image: image,
  }

  return getComponent<IBlockFormDetail>(Block.BlockFormDetail, props)
}

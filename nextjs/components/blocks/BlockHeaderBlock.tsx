import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IHeader } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from '../../interfaces/common'
import { getImageData } from 'utilities/blockData'

import { getConvertMenu } from '../../utilities/convertDataFromBackend'

export default function BlockHeaderBlock() {
  const [page] = usePage()

  const BlockType = page.blockHeader.data.attributes.BlockType
  const image: IImage | null = getImageData(
    page.blockHeader.data.attributes.Image?.data || null,
    page.blockHeader.data.attributes.ImageAlt,
  )

  const menu = page.blockHeader.data.attributes.Menu
  const convertedMenu = getConvertMenu(menu) || null

  const props: IHeader = {
    BlockType: BlockType as Block,
    Image: image,
    Menu: convertedMenu,
  }

  return getComponent<IHeader>(Block.BlockHeader, props)
}

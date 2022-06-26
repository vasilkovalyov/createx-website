import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IHeader } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from '../../interfaces/common'

import { getConvertMenu } from '../../utilities/convertDataFromBackend'

export default function BlockHeaderBlock() {
  const [page] = usePage()

  const BlockType = page.blockHeader.data.attributes.BlockType
  let Image: IImage | null
  if (page.blockHeader.data.attributes.Image.data) {
    Image = {
      Url: page.blockHeader.data.attributes.Image?.data.attributes.url,
      Alt: page.blockHeader.data.attributes.ImageAlt,
    }
  } else {
    Image = null
  }
  const menu = page.blockHeader.data.attributes.Menu
  const convertedMenu = getConvertMenu(menu) || null

  const props: IHeader = {
    BlockType: BlockType as Block,
    Image: Image,
    Menu: convertedMenu,
  }

  return getComponent<IHeader>(Block.BlockHeader, props)
}

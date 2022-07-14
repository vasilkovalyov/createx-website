import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockProjectDescription } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IProjectDescription } from 'interfaces/common'
import { getBlockData } from 'utilities/blockData'

export default function BlockProjectDescriptionBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockProjectDescription)
  if (!blockData) return null

  let items: IProjectDescription[] | []

  if (blockData.Items && blockData.Items.length) {
    items = blockData.Items
  } else {
    items = []
  }

  const props = {
    Title: blockData.Title,
    RichText: blockData.RichText,
    Items: items,
  } as unknown as IBlockProjectDescription

  return getComponent<IBlockProjectDescription>(Block.BlockProjectDescription, props)
}

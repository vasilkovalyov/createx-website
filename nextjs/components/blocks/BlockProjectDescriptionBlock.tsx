import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockProjectDescription } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IProjectDescription } from 'interfaces/common'

export default function BlockProjectDescriptionBlock() {
  const [page] = usePage()

  if (!page?.pages || !page?.pages.data || !page.pages.data[0].attributes.Body?.length) return null
  const data = page.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockProjectDescription) return item
  })[0]

  if (!data) return null

  let items: IProjectDescription[] | []

  if (data.Items && data.Items.length) {
    items = data.Items
  } else {
    items = []
  }

  const props = {
    Title: data.Title,
    RichText: data.RichText,
    Items: items,
  } as unknown as IBlockProjectDescription

  return getComponent<IBlockProjectDescription>(Block.BlockProjectDescription, props)
}

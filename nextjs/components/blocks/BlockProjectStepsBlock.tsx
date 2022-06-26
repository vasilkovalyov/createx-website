import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockProjectSteps } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockProjectStepsBlock() {
  const [page] = usePage()

  if (!page?.pages || !page?.pages.data || !page.pages.data[0].attributes.Body?.length) return null
  const data = page.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockProjectSteps) return item
  })[0]

  if (!data) return null

  const props = {
    ...data,
  } as unknown as IBlockProjectSteps

  return getComponent<IBlockProjectSteps>(Block.BlockProjectSteps, props)
}

import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockProjectSteps } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockProjectStepsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockProjectSteps)
  if (!blockData) return null

  const props = {
    ...blockData,
  } as unknown as IBlockProjectSteps

  return getComponent<IBlockProjectSteps>(Block.BlockProjectSteps, props)
}

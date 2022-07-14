import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurOffices } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { SocialIcon } from 'enums/icons'
import { ISocialLink } from 'interfaces/common'
import { getBlockData } from 'utilities/blockData'

export default function BlockOurOfficesBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockOurOffices)
  if (!blockData) return null

  const getSocialUpdateItems = (socialList: ISocialLink[]): ISocialLink[] | [] => {
    if (!socialList.length) return []
    return socialList.map((item) => {
      return {
        ...item,
        Icon: `icon-${item.Icon}` as SocialIcon,
      }
    })
  }

  const props = {
    ...blockData,
    Socials: getSocialUpdateItems(blockData.Socials),
  } as unknown as IBlockOurOffices

  return getComponent<IBlockOurOffices>(Block.BlockOurOffices, props)
}

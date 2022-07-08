import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurOffices } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { SocialIcon } from 'enums/icons'
import { ISocialLink } from 'interfaces/common'

export default function BlockOurOfficesBlock() {
  const [page] = usePage()

  const data = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockOurOffices) return item
  })[0]

  if (!data) return

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
    ...data,
    Socials: getSocialUpdateItems(data.Socials),
  } as unknown as IBlockOurOffices

  return getComponent<IBlockOurOffices>(Block.BlockOurOffices, props)
}

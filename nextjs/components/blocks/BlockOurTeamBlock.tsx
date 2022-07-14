import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurTeam } from '../../interfaces/blocks'
import { IImage, IPerson, ISocialLink } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { SocialIcon } from 'enums/icons'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockOurTeamBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockOurTeam)
  if (!blockData) return null

  const items: IPerson[] = blockData.Items.map((person) => {
    const image: IImage | null = getImageData(person.Image.data || null, person.ImageAlt)
    const socials: ISocialLink[] = []

    if (person.SocialIcon1 && person.SocialUrl1) {
      socials.push({
        id: '1',
        Icon: `icon-${person.SocialIcon1}` as SocialIcon,
        Target: '_blank',
        Url: person.SocialUrl1,
      } as ISocialLink)
    }
    if (person.SocialIcon2 && person.SocialUrl2) {
      socials.push({
        id: '2',
        Icon: `icon-${person.SocialIcon2}` as SocialIcon,
        Target: '_blank',
        Url: person.SocialUrl2,
      } as ISocialLink)
    }
    if (person.SocialIcon3 && person.SocialUrl3) {
      socials.push({
        id: '3',
        Icon: `icon-${person.SocialIcon3}` as SocialIcon,
        Target: '_blank',
        Url: person.SocialUrl3,
      } as ISocialLink)
    }

    return {
      id: person.id,
      Image: image,
      Title: person.Title,
      Text: person.Text,
      Socials: socials,
    } as IPerson
  })

  const props = {
    Title: blockData.Title,
    Text: blockData.Text,
    Items: items,
  } as IBlockOurTeam

  return getComponent<IBlockOurTeam>(Block.BlockOurTeam, props)
}

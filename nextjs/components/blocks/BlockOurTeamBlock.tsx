import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurTeam } from '../../interfaces/blocks'
import { IImage, IPerson, ISocialLink } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { SocialIcon } from 'enums/icons'

export default function BlockOurTeamBlock() {
  const [page] = usePage()

  const data = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockOurTeam) {
      return item.BlockType === Block.BlockOurTeam
    }
  })[0]

  if (!data) return null

  const items: IPerson[] = data.Items.map((person) => {
    let image: IImage | null
    if (person.Image.data) {
      image = {
        Url: person.Image.data.attributes.url,
        Alt: person.ImageAlt as string,
      }
    } else {
      image = null
    }

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
    Title: data.Title,
    Text: data.Text,
    Items: items,
  } as IBlockOurTeam

  return getComponent<IBlockOurTeam>(Block.BlockOurTeam, props)
}

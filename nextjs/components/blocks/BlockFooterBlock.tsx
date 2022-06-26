import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IFooter } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from '../../interfaces/common'

import { ISocialLink } from '../../interfaces/common'

import { getConvertMenuArray } from '../../utilities/convertDataFromBackend'

import { SocialIcon } from 'enums/icons'

export default function BlockFooterBlock() {
  const [page] = usePage()
  if (!page) return null

  const BlockType = page.blockFooter.data.attributes.BlockType
  let Image: IImage | null
  if (page.blockFooter.data.attributes.Image.data) {
    Image = {
      Url: page.blockFooter.data.attributes.Image?.data.attributes.url,
      Alt: page.blockFooter.data.attributes.ImageAlt,
    }
  } else {
    Image = null
  }

  const text = page.blockFooter.data.attributes.Text
  const menu = page.blockFooter.data.attributes.Menu
  const convertedMenu = getConvertMenuArray(menu) || null

  const iconsList = page.blockFooter.data.attributes.SocialList.Items

  const getSocialUpdateItems = (socialList: ISocialLink[]) => {
    if (!socialList.length) return []
    return socialList.map((item) => {
      return {
        ...item,
        Icon: `icon-${item.Icon}` as SocialIcon,
      }
    })
  }

  const props: IFooter = {
    BlockType: BlockType as Block,
    Image: Image,
    Text: text,
    Menu: convertedMenu,
    ContactInformation: page.blockFooter.data.attributes.ContactInformation,
    SocialList: {
      Items: getSocialUpdateItems(iconsList),
    },
    SubscribeForm: page.blockFooter.data.attributes.SubscribeForm,
  }

  return getComponent<IFooter>(Block.BlockFooter, props)
}

import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IFooter } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IImage } from '../../interfaces/common'

import { ISocialLink } from '../../interfaces/common'

import { getConvertMenuArray } from '../../utilities/convertDataFromBackend'

import { SocialIcon } from 'enums/icons'
import { getImageData } from 'utilities/blockData'

export default function BlockFooterBlock() {
  const [page] = usePage()
  if (!page) return null

  const BlockType = page.blockFooter.data.attributes.BlockType
  const image: IImage | null = getImageData(
    page.blockFooter.data.attributes.Image?.data || null,
    page.blockFooter.data.attributes.ImageAlt,
  )

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
    Image: image,
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

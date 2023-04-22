import { getComponent } from '../'
import { BlockEnum } from '@/utils/blockEnums'
import { IBlockServices } from '@/blocks/BlockServices/BlockServices.type'
import { IService } from '@/components/Service/Service.type'
import { IImageUi } from '@/types/common'
import { ICmsBlockServices } from './CmsBlockServices.type'

export default function CmsBlockServices({ Items }: ICmsBlockServices) {
  const items: IService[] | [] = Items.map((item) => {
    const { Heading, Text, Image } = item.attributes

    let image: IImageUi | null = null
    if (Image.Media.data) {
      image = {
        src: Image.Media.data?.attributes.url,
        alt: Image.Alt,
      }
    }
    return {
      id: item.id,
      heading: Heading,
      text: Text,
      image: image,
      href: `${item.attributes.page.data.attributes.Slug}/${item.attributes.Slug}`,
    }
  })

  let props: IBlockServices = {
    items: items,
  }
  return getComponent<IBlockServices>(BlockEnum.BlockServices, props)
}

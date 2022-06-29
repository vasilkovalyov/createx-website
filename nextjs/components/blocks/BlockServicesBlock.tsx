import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockService } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage, IService } from '../../interfaces/common'

export default function BlockServicesBlock() {
  const [page] = usePage()

  if (!page?.services.data || page?.services.data.length === 0) return null
  const data = page.services.data[0].attributes.page.data
  const parentPage = data ? data.attributes.Slug : ''

  const services = page?.services.data.map((item): IService => {
    const urlPage = parentPage ? `${parentPage}/${item.attributes.Slug}` : item.attributes.Slug
    let Image: IImage | null
    if (item.attributes.PreviewImage.data) {
      Image = {
        Url: item.attributes.PreviewImage.data.attributes.url,
        Alt: item.attributes.ImageAlt,
      }
    } else {
      Image = null
    }
    return {
      Image: Image,
      Title: item.attributes.Title,
      Text: item.attributes.Text,
      Link: {
        url: urlPage,
        text: item.attributes.SlugText,
      },
    } as IService
  })

  const props = {
    Items: services,
  } as unknown as IBlockService

  return getComponent<IBlockService>(Block.BlockServices, props)
}

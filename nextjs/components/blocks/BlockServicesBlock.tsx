import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockService } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage, IService } from '../../interfaces/common'
import { getImageData } from 'utilities/blockData'

export default function BlockServicesBlock() {
  const [page] = usePage()

  if (!page?.services.data || page?.services.data.length === 0) return null
  const data = page.services.data[0].attributes.page.data
  const parentPage = data ? data.attributes.Slug : ''

  const services = page?.services.data.map((item): IService => {
    const urlPage = parentPage ? `${parentPage}/${item.attributes.Slug}` : item.attributes.Slug
    const image: IImage | null = getImageData(item.attributes.PreviewImage.data || null, item.attributes.ImageAlt)

    return {
      Image: image,
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

import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockService } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { ILink, IService } from '../../interfaces/common'

export default function BlockServicesBlock() {
  const [page] = usePage()

  if (!page?.services || page?.services.data.length === 0) return null

  const services = page?.services.data.map((item): IService => {
    let link: ILink | null
    if (item.attributes.Link) {
      link = {
        url: item.attributes.Link.Slug.data.attributes.Slug,
        text: item.attributes.Link.Name,
      }
    } else {
      link = null
    }

    return {
      Image: {
        Url: item.attributes.Image.data.attributes.url,
        Alt: item.attributes.ImageAlt,
      },
      Title: item.attributes.Title,
      Text: item.attributes.Text,
      Link: link,
    } as IService
  })

  const props = {
    Items: services,
  } as unknown as IBlockService

  return getComponent<IBlockService>(Block.BlockServices, props)
}

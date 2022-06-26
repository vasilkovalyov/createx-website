import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockPreviewServices } from '../../interfaces/blocks'
import { IImage, ILink, IProject, IService, IWorkCategories } from '../../interfaces/common'
import { Block } from '../../enums/blocks'

export default function BlockPreviewServicesBlock() {
  const [page] = usePage()

  if (!page?.pages.data[0].attributes.Body) return null

  const data = page?.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockPreviewServices) return item
  })[0]

  const services = data ? page.services?.data : []

  let items: IService[] | []

  if (services) {
    items = services.map((service) => {
      const parentPage = service.attributes.page.data ? service.attributes.page.data.attributes.Slug : ''
      const urlPage = parentPage ? `${parentPage}/${service.attributes.Slug}` : service.attributes.Slug

      let Image: IImage | null
      let Logo: IImage | null
      let Logo2: IImage | null

      const imageData = service.attributes.PreviewImageSmall.data
      const logoData1 = service.attributes.PreviewLogoPrimary.data
      const logoData2 = service.attributes.PreviewLogoSecondary.data

      if (imageData) {
        Image = {
          Url: imageData.attributes.url,
          Alt: service.attributes.ImageAlt,
        }
      } else {
        Image = null
      }
      if (logoData1) {
        Logo = {
          Url: logoData1.attributes.url,
          Alt: service.attributes.ImageAlt,
        }
      } else {
        Logo = null
      }
      if (logoData2) {
        Logo2 = {
          Url: logoData2.attributes.url,
          Alt: service.attributes.ImageAlt,
        }
      } else {
        Logo2 = null
      }

      return {
        id: service.id,
        Title: service.attributes.Title,
        Image: Image,
        Logo: Logo,
        Logo2: Logo2,
        Link: {
          url: urlPage,
        } as ILink,
      } as unknown as IService
    })
  } else {
    items = []
  }

  const props = {
    Title: data.Title,
    Text: data.Text,
    Items: items,
  } as IBlockPreviewServices

  return getComponent<IBlockPreviewServices>(Block.BlockPreviewServices, props)
}

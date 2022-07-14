import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockPreviewServices } from '../../interfaces/blocks'
import { IImage, ILink, IService } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockPreviewServicesBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockPreviewServices)
  if (!blockData) return null

  const services = blockData ? page.services?.data : []

  let items: IService[] | []

  if (services) {
    items = services.map((service) => {
      const parentPage = service.attributes.page.data ? service.attributes.page.data.attributes.Slug : ''
      const urlPage = parentPage ? `${parentPage}/${service.attributes.Slug}` : service.attributes.Slug

      const image: IImage | null = getImageData(
        service.attributes.PreviewImageSmall.data || null,
        service.attributes.ImageAlt,
      )
      const logo: IImage | null = getImageData(
        service.attributes.PreviewLogoPrimary.data || null,
        service.attributes.ImageAlt,
      )
      const logo2: IImage | null = getImageData(
        service.attributes.PreviewLogoSecondary.data || null,
        service.attributes.ImageAlt,
      )

      return {
        id: service.id,
        Title: service.attributes.Title,
        Image: image,
        Logo: logo,
        Logo2: logo2,
        Link: {
          url: urlPage,
        } as ILink,
      } as unknown as IService
    })
  } else {
    items = []
  }

  const props = {
    Title: blockData.Title,
    Text: blockData.Text,
    Items: items,
  } as IBlockPreviewServices

  return getComponent<IBlockPreviewServices>(Block.BlockPreviewServices, props)
}

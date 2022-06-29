import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockServiceDescription } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IAccordion, IImage } from '../../interfaces/common'

export default function BlockServiceDescriptionBlock() {
  const [page] = usePage()

  if (!page?.pages || !page?.pages.data || !page.pages.data[0].attributes.Body?.length) return null
  const data = page.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockServiceDescription) return item
  })[0]

  if (!data) return null

  let items: IAccordion[] | []
  let image: IImage | null
  if (data.Items) {
    items = data.Items.map((item) => {
      return {
        id: item.id,
        Title: item.Title,
        Text: item.Text,
      }
    })
  } else {
    items = []
  }
  if (data.Image && data.Image.data) {
    image = {
      Url: data.Image.data.attributes.url,
      Alt: data.ImageAlt as string,
    }
  } else {
    image = null
  }

  const props = {
    ...data,
    Items: items,
    Image: image,
  } as unknown as IBlockServiceDescription

  return getComponent<IBlockServiceDescription>(Block.BlockServiceDescription, props)
}

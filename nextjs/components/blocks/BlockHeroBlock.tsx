import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage } from 'interfaces/common'

export default function BlockHeroBlock() {
  const [page] = usePage()

  if (!page?.pages.data && !page?.pages.data[0].attributes.Body) return null

  const blockHeroData = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block.BlockHero) {
      return item.BlockType === Block.BlockHero
    }
  })[0]

  if (!blockHeroData) return null

  let Image: IImage | null

  if (blockHeroData.Image.data) {
    Image = {
      Url: blockHeroData.Image.data.attributes.url,
      Alt: blockHeroData.ImageAlt,
    }
  } else {
    Image = null
  }
  const props = {
    BlockType: blockHeroData.BlockType,
    Title: blockHeroData.Title,
    Image: Image,
    Text: blockHeroData.Text,
    Overlay: blockHeroData.Overlay,
  } as unknown as IBlockHero
  return getComponent<IBlockHero>(Block.BlockHero, props)
}

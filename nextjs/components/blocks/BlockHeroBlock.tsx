import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockHeroBlock() {
  const ctx = useContext(PageProvider)
  const blockHeroData = ctx?.pages.data[0].attributes.Body.filter((item) => item.BlockType === Block.BlockHero)[0]
  if (!blockHeroData) return null
  const props = {
    BlockType: blockHeroData.BlockType,
    Title: blockHeroData.Title,
    Image: {
      Url: blockHeroData.HeroImage.data.attributes.url,
      Alt: blockHeroData.HeroImage.ImageAlt,
    },
    Text: blockHeroData.Text,
    Overlay: blockHeroData.Overlay,
  } as unknown as IBlockHero
  return getComponent<IBlockHero>(Block.BlockHero, props)
}

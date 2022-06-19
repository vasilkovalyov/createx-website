import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockIntroCarousel } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { IImage, ILink } from '../../interfaces/common'
import { IImageField } from 'interfaces/fields'

export default function BlockIntroCarouselBlock() {
    const ctx = useContext(PageProvider)
    const blockIntroCarouselData = ctx?.pages.data[0].attributes.Body.filter((item) => item.BlockType === Block.BlockIntroCarousel)[0]
    if (!blockIntroCarouselData) return null

    const link = {
        url: `/${blockIntroCarouselData.PageLink.page.data.attributes.Slug}`,
        text: blockIntroCarouselData.PageLink.Name
    } as ILink

    const items = (items: IImageField[]):IImage[] => {
        return items.map((item) => {
            return {
                Url: item.Image.data.attributes.url,
                Alt: item.ImageAlt
            }
        })
    }

    const props = {
        BlockType: blockIntroCarouselData.BlockType,
        Title: blockIntroCarouselData.TitleIntroCarousel,
        Text: blockIntroCarouselData.Text,
        Items: items(blockIntroCarouselData.Items),
        Link: link
    } as unknown as IBlockIntroCarousel
    
    return getComponent<IBlockIntroCarousel>(Block.BlockIntroCarousel, props)
}

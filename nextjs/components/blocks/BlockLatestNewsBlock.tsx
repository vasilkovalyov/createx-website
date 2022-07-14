import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockNews } from '../../interfaces/blocks'
import { IImage, INewsPost } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getBlockData, getImageData } from 'utilities/blockData'

interface Category {
  Title: string
  Name: string
}

export default function BlockNewsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockLatestNews)
  if (!blockData) return null

  if (!page?.latestPosts.data || !page?.latestPosts.data.length) return null

  let posts: INewsPost[] | []
  if (page.latestPosts.data !== null) {
    posts = page.latestPosts.data.map((item) => {
      const image: IImage | null = getImageData(item.attributes.Image.data || null, item.attributes.ImageAlt)
      let categories: Category[]

      if (item.attributes.post_categories.data) {
        categories = item.attributes.post_categories.data.map((item) => {
          return {
            Title: item.attributes.Title,
            Name: item.attributes.Name,
          }
        })
      } else {
        categories = []
      }
      const parentPage = item.attributes.page.data ? item.attributes.page.data.attributes.Slug : ''
      const urlPage = parentPage ? `${parentPage}/${item.attributes.Slug}` : item.attributes.Slug

      return {
        id: item.id,
        Title: item.attributes.Title,
        Text: item.attributes.Text,
        Image: image,
        Date: item.attributes.Date,
        Link: {
          url: urlPage,
        },
        Categories: categories,
      } as unknown as INewsPost
    })
  } else {
    posts = []
  }

  const props = {
    Title: blockData.Title,
    Items: posts,
  } as Omit<IBlockNews, 'Categories'>

  return getComponent<Omit<IBlockNews, 'Categories'>>(Block.BlockLatestNews, props)
}

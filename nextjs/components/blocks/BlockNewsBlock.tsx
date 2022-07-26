import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockNews } from '../../interfaces/blocks'
import { INewsPost, INewsCategories } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getBlockData, getFormattedPosts } from 'utilities/blockData'

export default function BlockNewsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockNews)
  if (!blockData) return null

  if (!page?.posts.data || !page?.posts.data.length) return null

  let categories: INewsCategories[] | []
  let posts: INewsPost[] | []

  if (page.postCategories.data !== null) {
    categories = page.postCategories.data.map((item) => {
      return {
        id: item.id,
        Title: item.attributes.Title,
        Name: item.attributes.Name,
      }
    })
  } else {
    categories = []
  }

  if (page.posts.data !== null) {
    posts = getFormattedPosts(page.posts.data)
  } else {
    posts = []
  }

  const props = {
    Title: blockData?.Title,
    Categories: categories,
    Items: posts,
    meta: page.posts.meta,
  } as IBlockNews

  return getComponent<IBlockNews>(Block.BlockNews, props)
}

import { IBlockRecentNews } from './BlockRecentNews.type'
import { model as modelNewsPost } from '../../components/NewsPost/NewsPost.model'

export const model: IBlockRecentNews = {
  heading: 'Recent news',
  items: [
    {
      ...modelNewsPost,
    },
    {
      ...modelNewsPost,
      id: '2',
      heading: 'How Construction Can Help Itself',
      // text: undefined,
    },
    {
      ...modelNewsPost,
      id: '3',
      heading: 'Types of Flooring Materials',
      text: undefined,
    },
  ],
}

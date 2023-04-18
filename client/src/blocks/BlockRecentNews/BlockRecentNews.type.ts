import { INewsPost } from '../../components/NewsPost/NewsPost.type'

export interface IBlockRecentNews {
  heading?: string
  items: INewsPost[] | []
  className?: string
}

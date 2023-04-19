import { IProductPreview } from '../../components/ProductPreview/ProductPreview.type'

export interface IBlockProjectsCarousel {
  heading?: string
  items: IProductPreview[] | []
  className?: string
}

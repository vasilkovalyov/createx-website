import { IServicePreview } from '../../components/ServicePreview/ServicePreview.type'

export interface IBlockServicePreview {
  heading?: string
  text?: string
  items: IServicePreview[]
  className?: string
}

import { IImageUi } from '../../types/common'
import { IClientQuote } from '../../components/ClientQuote/ClientQuote.type'

export interface IBlockClientSays {
  heading?: string
  className?: string
  image?: IImageUi
  items: IClientQuote[] | []
}

import { IImageUi } from '../../types/common'

export interface IBlockTeamMemberQuote {
  image?: IImageUi
  className?: string
  richText: string
  author: string
  position: string
  signatureImage?: IImageUi
}

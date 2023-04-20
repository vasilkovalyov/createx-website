import { IImageUi, SocialType } from '../../types/common'

export interface ITeamMember {
  id: string
  image: IImageUi
  name: string
  position: string
  socialLinks: SocialType[]
  className?: string
}

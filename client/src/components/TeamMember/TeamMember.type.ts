import { IImageUi, SocialType } from '@/types/common'

export interface ITeamMember {
  image: IImageUi
  name: string
  position: string
  socialLinks: SocialType[]
  className?: string
}

import { SocialType } from '../../types/common'

export interface ISocialList {
  className?: string
  items: ISocialListItem[]
  size?: 'sm' | 'md'
}

export interface ISocialListItem extends SocialType {
  id: string
}

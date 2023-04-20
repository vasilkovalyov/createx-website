import { ISocialList } from './SocialList.type'
import { SocialIcon } from '../../types/icons'

export const model: ISocialList = {
  items: [
    {
      id: '1',
      href: '/',
      icon: SocialIcon.Messanger,
    },
    {
      id: '2',
      href: '/',
      icon: SocialIcon.Whatsapp,
    },
    {
      id: '3',
      href: '/',
      icon: SocialIcon.Facebook,
    },
    {
      id: '4',
      href: '/',
      icon: SocialIcon.Twitter,
    },
    {
      id: '5',
      href: '/',
      icon: SocialIcon.Youtube,
    },
  ],
}

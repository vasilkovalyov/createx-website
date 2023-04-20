import { ITeamMember } from './TeamMember.type'

export const model: ITeamMember = {
  id: '1',
  image: {
    src: '/images/author-testimonial.jpg',
    alt: 'Diane Mccoy',
  },
  name: 'Diane Mccoy',
  position: 'Director of Human Resources',
  socialLinks: [
    {
      icon: 'icon-linked-in',
      href: '/',
    },
    {
      icon: 'icon-twitter',
      href: '/',
    },
    {
      icon: 'icon-facebook',
      href: '/',
    },
  ],
}

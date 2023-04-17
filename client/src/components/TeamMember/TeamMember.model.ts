import { ITeamMember } from './TeamMember.type'

export const model: ITeamMember = {
  image: {
    src: '/images/author-testimonial.jpg',
    alt: 'Diane Mccoy',
  },
  name: 'Diane Mccoy',
  position: 'Director of Human Resources',
  socialLinks: [
    {
      icon: 'linkedin',
      href: '/',
    },
    {
      icon: 'twitter',
      href: '/',
    },
    {
      icon: 'facebook',
      href: '/',
    },
  ],
}

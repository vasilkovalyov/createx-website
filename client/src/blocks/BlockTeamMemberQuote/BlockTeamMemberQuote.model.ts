import { IBlockTeamMemberQuote } from './BlockTeamMemberQuote.type'

export const model: IBlockTeamMemberQuote = {
  image: {
    src: '/images/author-testimonial.jpg',
    alt: 'Courtney Alexander',
    width: 525,
    height: 580,
  },
  signatureImage: {
    src: '/images/signature.png',
    alt: 'Courtney Alexander',
    width: 98,
    height: 68,
  },
  author: 'Courtney Alexander',
  position: 'CEO - Createx Construction Bureau ',
  richText: `
    <p>
      <strong>Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.</strong>
    </p>
    <p>
      <strong>Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer.</strong>
    </p>
  `,
}

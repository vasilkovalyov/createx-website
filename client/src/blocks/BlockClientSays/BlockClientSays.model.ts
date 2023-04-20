import { IBlockClientSays } from './BlockClientSays.type'
import { model as modelClientQuote } from '../../components/ClientQuote/ClientQuote.model'

export const model: IBlockClientSays = {
  heading: 'What our clients are saying',
  image: {
    src: '/images/our-clients.jpg',
    alt: 'clients are saying',
    width: 495,
    height: 550,
  },
  items: [
    {
      ...modelClientQuote,
      id: '1',
    },
    {
      ...modelClientQuote,
      id: '2',
    },
    {
      ...modelClientQuote,
      id: '3',
    },
  ],
}

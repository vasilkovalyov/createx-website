import { IBlockBenefits } from './BlockBenefits.type'
import { model as modelBenefit } from '../../components/Benefit/Benefit.model'

export const model: IBlockBenefits = {
  heading: 'Our core values',
  text: 'Our mission is to set the highest standards for construction sphere.',
  items: [
    {
      ...modelBenefit,
      heading: 'Quality',
      text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
    },
    {
      ...modelBenefit,
      heading: 'Safety',
      text: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
    },
    {
      ...modelBenefit,
      heading: 'Comfort',
      text: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
    },
  ],
}

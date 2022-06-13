import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockBenefits from '../../components/theme/plain/BlockBenefits'

export default {
  title: 'Blocks/BlockBenefits',
  component: BlockBenefits,
} as ComponentMeta<typeof BlockBenefits>

const Template: ComponentStory<typeof BlockBenefits> = (args) => <BlockBenefits {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'Our benefits',
  Text: 'Our mission is to set the highest standards for construction sphere.',
  Items: [
    {
        id: '1',
        Image: {
            Url: '/images/benefit-icon-1.svg',
            Alt: 'Fixed Terms & Cost'
          },
        Title: 'Fixed Terms & Cost',
        Text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
    },
    {
        id: '2',
        Image: {
            Url: '/images/benefit-icon-2.svg',
            Alt: 'Qualified Workers'
          },
        Title: 'Qualified Workers',
        Text: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
    },
    {
        id: '3',
        Image: {
            Url: '/images/benefit-icon-3.svg',
            Alt: 'Supervision & Control'
          },
        Title: 'Supervision & Control',
        Text: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
    }
  ]
}

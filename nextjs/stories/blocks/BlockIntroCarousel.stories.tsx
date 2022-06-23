import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockIntroCarousel from '../../components/theme/plain/BlockIntroCarousel'

export default {
  title: 'Blocks/BlockIntroCarousel',
  component: BlockIntroCarousel,
} as ComponentMeta<typeof BlockIntroCarousel>

const Template: ComponentStory<typeof BlockIntroCarousel> = (args) => <BlockIntroCarousel {...args} />

export const Default = Template.bind({})

Default.args = {
  Title: 'CREATEX CONSTRUCTION',
  Text: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ',
  Link: {
    text: 'Learn more about us',
    url: '/',
  },
  Items: [
    {
      Url: '/images/bg-image.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/bg-image.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/bg-image.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/bg-image.jpg',
      Alt: 'image description',
    },
  ],
}

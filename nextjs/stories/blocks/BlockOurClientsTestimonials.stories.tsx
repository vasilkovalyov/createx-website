import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockOurClientsTestimonials from '../../components/theme/plain/BlockOurClientsTestimonials'

export default {
  title: 'Blocks/BlockOurClientsTestimonials',
  component: BlockOurClientsTestimonials,
} as ComponentMeta<typeof BlockOurClientsTestimonials>

const Template: ComponentStory<typeof BlockOurClientsTestimonials> = (args) => <BlockOurClientsTestimonials {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'What our clients are saying',
  Image: {
    Url: '/images/our-clients.jpg',
    Alt: 'our clients',
  },
  Items: [
    {
      id: '1',
      Image: {
        Url: '/images/profile-image.jpg',
        Alt: 'Shawn Edwards',
      },
      Text: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ',
      Name: 'Shawn Edwards',
      Position: 'Position, Company name',
    },
    {
      id: '2',
      Image: {
        Url: '/images/profile-image.jpg',
        Alt: 'Shawn Edwards',
      },
      Text: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ',
      Name: 'Shawn Edwards',
      Position: 'Position, Company name',
    },
    {
      id: '3',
      Image: {
        Url: '/images/profile-image.jpg',
        Alt: 'Shawn Edwards',
      },
      Text: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ',
      Name: 'Shawn Edwards',
      Position: 'Position, Company name',
    },
  ],
}

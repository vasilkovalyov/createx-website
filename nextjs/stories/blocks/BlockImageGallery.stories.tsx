import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockImageGallery from '../../components/theme/plain/BlockImageGallery'

export default {
  title: 'Blocks/BlockImageGallery',
  component: BlockImageGallery,
} as ComponentMeta<typeof BlockImageGallery>

const Template: ComponentStory<typeof BlockImageGallery> = (args) => <BlockImageGallery {...args} />

export const Default = Template.bind({})

Default.args = {
  Items: [
    {
      Url: '/images/image-gallery.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/image-gallery.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/image-gallery.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/image-gallery.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/image-gallery.jpg',
      Alt: 'image description',
    },
    {
      Url: '/images/image-gallery.jpg',
      Alt: 'image description',
    },
  ],
}

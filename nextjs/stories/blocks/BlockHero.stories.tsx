import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockHero from '../../components/theme/plain/BlockHero'

export default {
  title: 'Blocks/BlockHero',
  component: BlockHero,
} as ComponentMeta<typeof BlockHero>

const Template: ComponentStory<typeof BlockHero> = (args) => <BlockHero {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'Heading 1',
  Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  Image: {
    Url: '/images/hero-bg-image.jpg',
    Alt: 'image description',
  },
  Overlay: false,
}

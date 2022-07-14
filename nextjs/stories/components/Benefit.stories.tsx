import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Benefit from '../../components/theme/plain/Benefit'

export default {
  title: 'Components/Benefit',
  component: Benefit,
} as ComponentMeta<typeof Benefit>

const Template: ComponentStory<typeof Benefit> = (args) => <Benefit {...args} />

export const Default = Template.bind({})

Default.args = {
  Image: {
    Url: '/images/service-icon-orange.svg',
    Alt: 'alt',
  },
  Title: 'Quality',
  Text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
}

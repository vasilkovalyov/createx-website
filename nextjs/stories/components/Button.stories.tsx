import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../../components/theme/plain/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', ''],
      control: { size: 'check' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  outline: false,
  name: 'Post comment',
  size: '',
  fullwidth: false,
}

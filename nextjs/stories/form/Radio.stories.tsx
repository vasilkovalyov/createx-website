import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Radio from '../../components/theme/plain/Form/Radio'

export default {
  title: 'Form/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Default = Template.bind({})

Default.args = {
    label: 'Radio',
    name: 'radio',
    value: 'radio',
    checked: true
}

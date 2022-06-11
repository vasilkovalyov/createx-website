import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from '../../components/theme/plain/Form/Checkbox'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
    label: 'Checkbox',
    name: 'checkbox',
    value: 'checkbox',
    checked: false
}

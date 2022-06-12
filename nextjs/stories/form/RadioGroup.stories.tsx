import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RadioGroup from '../../components/theme/plain/Form/RadioGroup'

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})

Default.args = {
    label: 'Preferred contact method',
    required: false,
    items: [
        {
            id: '1',
            label: 'Phone',
            name: 'contact',
            value: 'phone',
            checked: false
        },
        {
            id: '2',
            label: 'Email',
            name: 'contact',
            value: 'email',
            checked: false
        },
        {
            id: '3',
            label: 'Viber',
            name: 'contact',
            value: 'viber',
            checked: false
        },
    ]
}

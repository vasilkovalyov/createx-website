import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OfficeAddress from '../../components/theme/plain/OfficeAddress'

export default {
  title: 'Components/OfficeAddress',
  component: OfficeAddress,
  argTypes: {
    icon: {
        options: ['light', 'dark'],
        control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof OfficeAddress>

const Template: ComponentStory<typeof OfficeAddress> = (args) => <OfficeAddress {...args} />

export const Default = Template.bind({})
Default.args = {
    Title: 'New York, USA',
    Address: '8502 Preston Rd. Inglewood, New York',
    Phone: '(405) 555-0128',
    Email: 'hello@createx.com',
    Schedule: 'Mon - Fri 9:00 - 18:00',
}
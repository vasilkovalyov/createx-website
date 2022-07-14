import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContactInformation from '../../components/theme/plain/ContactInformation'

export default {
  title: 'Components/ContactInformation',
  component: ContactInformation,
  argTypes: {
    icon: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ContactInformation>

const Template: ComponentStory<typeof ContactInformation> = (args) => <ContactInformation {...args} />

export const Default = Template.bind({})
Default.args = {
  Address: '8502 Preston Rd. Inglewood, New York',
  Phone: '(405) 555-0128',
  Email: 'hello@createx.com',
  Schedule: 'Mon - Fri 9:00 - 18:00',
}

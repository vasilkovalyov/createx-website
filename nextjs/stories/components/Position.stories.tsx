import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Position from '../../components/theme/plain/Position'

export default {
  title: 'Components/Position',
  component: Position,
} as ComponentMeta<typeof Position>

const Template: ComponentStory<typeof Position> = (args) => <Position {...args} />

export const Default = Template.bind({})
Default.args = {
  Location: 'New York',
  TypeWork: 'Full Time',
  Title: 'Financial Compliance Analyst',
  Link: {
    text: '',
    url: '/',
  },
}

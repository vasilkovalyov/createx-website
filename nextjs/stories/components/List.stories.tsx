import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from '../../components/theme/plain/List'
import { EnumsIcon } from '../../enums/icons'

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    type: {
      options: ['default', 'with-icon'],
      control: { type: 'select' },
    },
    icon: {
        options: EnumsIcon,
        control: { type: 'select' },
      },
  },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: 'icon-check-outline',
  Items: [
    {
        id: '1',
        Text: 'Vitae ultrices ornare eu sed in est quisque duis id.',
    },
    {
        id: '2',
        Text: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    },
    {
        id: '3',
        Text: 'Mauris odio pellentesque commodo, diam.',
    },
    {
        id: '4',
        Text: 'Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.',
    },
    {
        id: '5',
        Text: 'At pharetra libero blandit risus, fringilla sed commodo diam.',
    },
    {
        id: '6',
        Text: 'Integer ultricies viverra ut enim viverra ut.',
    },
  ]
} 

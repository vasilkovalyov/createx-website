import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Service from '../../components/theme/plain/Service'

export default {
  title: 'Components/Service',
  component: Service,
  argTypes: {
    type: {
      options: ['card', 'post'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Service>

const Template: ComponentStory<typeof Service> = (args) => <Service {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'card',
  Image: {
    Url: '/images/service-img.jpg',
    Alt: 'alt',
  },
  Logo: {
    Url: '/images/service-icon-orange.svg',
    Alt: 'alt',
  },
  Logo2: {
    Url: '/images/service-icon-white.svg',
    Alt: 'alt',
  },
  Title: 'Interior Design',
  Text: 'Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.',
  Link: {
    text: '',
    url: '/',
  }
} 

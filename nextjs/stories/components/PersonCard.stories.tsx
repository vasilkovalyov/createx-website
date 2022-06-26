import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PersonCard from '../../components/theme/plain/PersonCard'
import { SocialIcon } from '../../enums/icons'

export default {
  title: 'Components/PersonCard',
  component: PersonCard,
} as ComponentMeta<typeof PersonCard>

const Template: ComponentStory<typeof PersonCard> = (args) => <PersonCard {...args} />

export const Default = Template.bind({})
Default.args = {
  Image: {
    Url: '/images/team-image.jpg',
    Alt: 'alt',
  },
  Title: 'Judith Warren',
  Text: 'Lead Accountant',
  Socials: {
    Items: [
      {
        id: '5',
        Url: '/',
        Icon: 'icon-linked-In' as SocialIcon,
      },
      {
        id: '1',
        Url: '/',
        Icon: 'icon-twitter' as SocialIcon,
      },
      {
        id: '4',
        Url: '/',
        Icon: 'icon-facebook' as SocialIcon,
      },
    ],
  },
}

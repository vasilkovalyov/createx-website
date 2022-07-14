import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SocialList from '../../components/theme/plain/SocialList'
import { SocialIcon } from '../../enums/icons'

export default {
  title: 'Components/SocialList',
  component: SocialList,
} as ComponentMeta<typeof SocialList>

const Template: ComponentStory<typeof SocialList> = (args) => <SocialList {...args} />

export const Default = Template.bind({})
Default.args = {
  Items: [
    {
      id: '2',
      Url: 'https://www.whatsapp.com/?lang=ru',
      Icon: 'icon-whatsapp' as SocialIcon,
    },
    {
      id: '6',
      Url: 'https://www.messenger.com/',
      Icon: 'icon-messanger' as SocialIcon,
    },
    {
      id: '4',
      Url: 'https://www.facebook.com/',
      Icon: 'icon-facebook' as SocialIcon,
    },
    {
      id: '1',
      Url: 'https://twitter.com/?lang=uk',
      Icon: 'icon-twitter' as SocialIcon,
    },
    {
      id: '3',
      Url: 'https://www.youtube.com/?hl=uk&gl=UA',
      Icon: 'icon-youtube' as SocialIcon,
    },
    {
      id: '5',
      Url: 'https://www.linkedin.com/',
      Icon: 'icon-linked-In' as SocialIcon,
    },
  ],
}

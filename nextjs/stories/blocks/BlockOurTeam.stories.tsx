import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockOurTeam from '../../components/theme/plain/BlockOurTeam'
import { IBlockOurTeam } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
import { SocialIcon } from '../../enums/icons'

export default {
  title: 'Blocks/BlockOurTeam',
  component: BlockOurTeam,
} as ComponentMeta<typeof BlockOurTeam>

const Template: ComponentStory<typeof BlockOurTeam> = (args) => <BlockOurTeam {...args} />

const model: IBlockOurTeam = {
  BlockType: Block.BlockOurTeam,
  Title: 'Our team',
  Text: 'People are at the heart of Createx Construction Bureau  ',
  Items: [
    {
      id: '1',
      Title: 'Courtney Alexander',
      Text: 'CEO, Co-Founder',
      Image: {
        Url: '/images/team-image.jpg',
        Alt: 'alt',
      },
      Socials: [
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
    {
      id: '2',
      Title: 'Courtney Alexander',
      Text: 'CEO, Co-Founder',
      Image: {
        Url: '/images/team-image.jpg',
        Alt: 'alt',
      },
      Socials: [
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
    {
      id: '3',
      Title: 'Courtney Alexander',
      Text: 'CEO, Co-Founder',
      Image: {
        Url: '/images/team-image.jpg',
        Alt: 'alt',
      },
      Socials: [
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
    {
      id: '4',
      Title: 'Courtney Alexander',
      Text: 'CEO, Co-Founder',
      Image: {
        Url: '/images/team-image.jpg',
        Alt: 'alt',
      },
      Socials: [
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
  ],
}

export const Default = Template.bind({})
Default.args = model

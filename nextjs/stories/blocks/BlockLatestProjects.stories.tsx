import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockLatestProjects from '../../components/theme/plain/BlockLatestProjects'

export default {
  title: 'Blocks/BlockLatestProjects',
  component: BlockLatestProjects,
} as ComponentMeta<typeof BlockLatestProjects>

const Template: ComponentStory<typeof BlockLatestProjects> = (args) => <BlockLatestProjects {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'Browse our selected projects and learn more about our work',
  Text: 'Explore all our works',
  Link: {
    text: 'View portfolio',
    url: '/',
  },
  Items: [
    {
      id: '1',
      Image: {
        Url: '/images/service-img.jpg',
        Alt: 'Qualified Workers',
      },
      Title: 'Red Finger Building',
      Description: 'Business Centers',
      Link: {
        text: 'View Project',
        url: '/',
      },
    },
    {
      id: '2',
      Image: {
        Url: '/images/service-img.jpg',
        Alt: 'Cubes Building',
      },
      Title: 'Cubes Building',
      Description: 'Business Centers',
      Link: {
        text: 'View Project',
        url: '/',
      },
    },
    {
      id: '3',
      Image: {
        Url: '/images/service-img.jpg',
        Alt: 'The Pencil Building',
      },
      Title: 'The Pencil Building',
      Description: 'Stores & Malls',
      Link: {
        text: 'View Project',
        url: '/',
      },
    },
    {
      id: '4',
      Image: {
        Url: '/images/service-img.jpg',
        Alt: 'Qualified Workers',
      },
      Title: 'Red Finger Building',
      Description: 'Business Centers',
      Link: {
        text: 'View Project',
        url: '/',
      },
    },
    {
      id: '5',
      Image: {
        text: 'View Project',
        Url: '/images/service-img.jpg',
        Alt: 'Cubes Building',
      },
      Title: 'Cubes Building',
      Description: 'Business Centers',
      Link: {
        text: 'View Project',
        url: '/',
      },
    },
    {
      id: '6',
      Image: {
        Url: '/images/service-img.jpg',
        Alt: 'The Pencil Building',
      },
      Title: 'The Pencil Building',
      Description: 'Stores & Malls',
      Link: {
        text: 'View Project',
        url: '/',
      },
    },
  ],
}

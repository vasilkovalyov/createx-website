import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProjectCard from '../../components/theme/plain/ProjectCard'

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />

export const Default = Template.bind({})
Default.args = {
  Image: {
    Url: '/images/service-img.jpg',
    Alt: 'alt',
  },
  Title: 'Cubes Building',
  Description: 'Business Centers',
  Link: {
    text: '',
    url: '/',
  }
} 

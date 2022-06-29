import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProjectDescription from '../../components/theme/plain/ProjectDescription'

export default {
  title: 'Components/ProjectDescription',
  component: ProjectDescription,
} as ComponentMeta<typeof ProjectDescription>

const Template: ComponentStory<typeof ProjectDescription> = (args) => <ProjectDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  Items: [
    {
      id: '1',
      Title: 'Location',
      Text: '2464 Royal Ln. Mesa, New Jersey',
    },
    {
      id: '2',
      Title: 'Client',
      Text: 'Darlene Robertson',
    },

    {
      id: '3',
      Title: 'Architect',
      Text: 'HIK Architecture',
    },
    {
      id: '4',
      Title: 'Size',
      Text: '840 sq. feet',
    },
    {
      id: '5',
      Title: 'Value',
      Text: '$2 million',
    },
    {
      id: '6',
      Title: 'Completed',
      Text: 'May 2020',
    },
  ],
}

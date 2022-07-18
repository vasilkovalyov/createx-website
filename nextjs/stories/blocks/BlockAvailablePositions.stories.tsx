import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockAvailablePositions from '../../components/theme/plain/BlockAvailablePositions'
import { IBlockAvailablePositions } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default {
  title: 'Blocks/BlockAvailablePositions',
  component: BlockAvailablePositions,
} as ComponentMeta<typeof BlockAvailablePositions>

const Template: ComponentStory<typeof BlockAvailablePositions> = (args) => <BlockAvailablePositions {...args} />

export const Default = Template.bind({})

const model: IBlockAvailablePositions = {
  BlockType: Block.BlockAvailablePositions,
  Items: [
    {
      id: '1',
      Title: 'Heavy Equipment Operator',
      Location: 'New York',
      TypeWork: 'Full Time',
      Link: {
        url: '/',
        text: 'Apply now',
      },
    },

    {
      id: '2',
      Title: 'Financial Compliance Analyst',
      Location: 'San Francisco',
      TypeWork: 'Full Time',
      Link: {
        url: '/',
        text: 'Apply now',
      },
    },
    {
      id: '3',
      Title: 'Project Manager - Buildings',
      Location: 'New Jersey',
      TypeWork: 'Full Time',
      Link: {
        url: '/',
        text: 'Apply now',
      },
    },
    {
      id: '4',
      Title: 'Environment Specialist',
      Location: 'New York',
      TypeWork: 'Part Time',
      Link: {
        url: '/',
        text: 'Apply now',
      },
    },
    {
      id: '5',
      Title: 'Accountant',
      Location: 'New York',
      TypeWork: 'Full Time',
      Link: {
        url: '/',
        text: 'Apply now',
      },
    },
  ],
  Aside: {
    Title: 'Didn’t find what you were looking for?',
    Text: 'Send your CV or subscribe to our newsletter to receive information about new vacancies.',
    SendCV: true,
    Subscribe: true,
  },
}
Default.args = model

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockProjectSteps from '../../components/theme/plain/BlockProjectSteps'

export default {
  title: 'Blocks/BlockProjectSteps',
  component: BlockProjectSteps,
} as ComponentMeta<typeof BlockProjectSteps>

const Template: ComponentStory<typeof BlockProjectSteps> = (args) => <BlockProjectSteps {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'That’s how we do it',
  Items: [
    {
      id: '1',
      Title: 'Work Estimate',
      Text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit.',
      ShowNumber: true,
    },
    {
      id: '2',
      Title: 'Contract',
      Text: 'Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.',
      ShowNumber: true,
    },
    {
      id: '3',
      Title: 'Mobilization',
      Text: 'Odio massa scelerisque purus arcu sed velit eleifend cursus leo.',
      ShowNumber: true,
    },
    {
      id: '4',
      Title: 'Construction Work',
      Text: 'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.',
      ShowNumber: true,
    },
  ],
}

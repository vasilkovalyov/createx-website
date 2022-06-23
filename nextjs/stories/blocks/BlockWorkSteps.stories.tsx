import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockWorkSteps from '../../components/theme/plain/BlockWorkSteps'

export default {
  title: 'Blocks/BlockWorkSteps',
  component: BlockWorkSteps,
} as ComponentMeta<typeof BlockWorkSteps>

const Template: ComponentStory<typeof BlockWorkSteps> = (args) => <BlockWorkSteps {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'Our offices',
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

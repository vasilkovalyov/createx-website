import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockServiceDescription from '../../components/theme/plain/BlockServiceDescription'

export default {
  title: 'Blocks/BlockServiceDescription',
  component: BlockServiceDescription,
} as ComponentMeta<typeof BlockServiceDescription>

const Template: ComponentStory<typeof BlockServiceDescription> = (args) => <BlockServiceDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  Title: 'We offer',
  Image: {
    Url: '/images/image-service-description.jpg',
    Alt: 'We offer image',
  },
  Items: [
    {
      id: '1',
      Title: 'Interior design of apartments',
      Text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
    },
    {
      id: '2',
      Title: 'Interior design of private houses',
      Text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus.',
    },
  ],
}

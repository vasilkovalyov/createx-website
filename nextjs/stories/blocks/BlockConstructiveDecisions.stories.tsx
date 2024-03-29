import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockConstructiveDecisions from '../../components/theme/plain/BlockConstructiveDecisions'

export default {
  title: 'Blocks/BlockConstructiveDecisions',
  component: BlockConstructiveDecisions,
} as ComponentMeta<typeof BlockConstructiveDecisions>

const Template: ComponentStory<typeof BlockConstructiveDecisions> = (args) => <BlockConstructiveDecisions {...args} />

export const Default = Template.bind({})
Default.args = {
  Overlay: false,
  Reverse: false,
  Title: 'Constructive decisions',
  Image: {
    Url: '/images/constructive-decisions.jpg',
    Alt: 'constructive decisions',
  },
  RichText: `
  - Vitae ultrices ornare eu sed in est quisque duis id.
- A fermentum in morbi pretium aliquam adipiscing donec tempus.
- Mauris odio pellentesque commodo, diam.
- Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.
- At pharetra libero blandit risus, fringilla sed commodo diam.
- Integer ultricies viverra ut enim viverra ut.
`,
}

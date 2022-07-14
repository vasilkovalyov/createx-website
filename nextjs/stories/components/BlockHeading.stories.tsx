import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockHeading from '../../components/theme/plain/BlockHeading'
import { AlignContentType } from '../../types/common'

export default {
  title: 'Components/BlockHeading',
  component: BlockHeading,
} as ComponentMeta<typeof BlockHeading>

const Template: ComponentStory<typeof BlockHeading> = (args) => <BlockHeading {...args} />

export const Default = Template.bind({})

Default.args = {
  Title: 'Our core values',
  Text: 'Our mission is to set the highest standards for construction sphere.',
  aligned: 'center' as AlignContentType,
}

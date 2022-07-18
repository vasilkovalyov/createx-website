import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockPreviewServices from '../../components/theme/plain/BlockPreviewServices'

export default {
  title: 'Blocks/BlockPreviewServices',
  component: BlockPreviewServices,
} as ComponentMeta<typeof BlockPreviewServices>

const Template: ComponentStory<typeof BlockPreviewServices> = (args) => <BlockPreviewServices {...args} />

export const Default = Template.bind({})
Default.args = {}

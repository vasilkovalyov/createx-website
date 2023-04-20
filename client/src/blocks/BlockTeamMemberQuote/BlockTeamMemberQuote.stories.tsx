import type { Meta, StoryObj } from '@storybook/react'
import BlockTeamMemberQuote from '.'

import { model } from './BlockTeamMemberQuote.model'

const meta: Meta<typeof BlockTeamMemberQuote> = {
  title: 'Blocks/Block Team Member Quote',
  component: BlockTeamMemberQuote,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockTeamMemberQuote>

export const Default: Story = {
  args: {
    ...model,
  },
}

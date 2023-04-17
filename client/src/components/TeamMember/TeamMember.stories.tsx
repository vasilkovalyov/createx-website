import type { Meta, StoryObj } from '@storybook/react'
import TeamMember from '.'

import { model } from './TeamMember.model'

const meta: Meta<typeof TeamMember> = {
  title: 'Components/Team Member',
  component: TeamMember,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof TeamMember>

export const Default: Story = {
  args: {
    ...model,
  },
}

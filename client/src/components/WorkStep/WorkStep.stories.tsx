import type { Meta, StoryObj } from '@storybook/react'
import WorkStep from '.'

import { model } from './WorkStep.model'

const meta: Meta<typeof WorkStep> = {
  title: 'Components/Work Step',
  component: WorkStep,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof WorkStep>

export const Default: Story = {
  args: {
    ...model,
  },
}

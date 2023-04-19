import type { Meta, StoryObj } from '@storybook/react'
import IcomoonIcon from '.'

import { model } from './IcomoonIcon.model'

const meta: Meta<typeof IcomoonIcon> = {
  title: 'Components/IcomoonIcon',
  component: IcomoonIcon,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof IcomoonIcon>

export const Default: Story = {
  args: {
    ...model,
  },
}

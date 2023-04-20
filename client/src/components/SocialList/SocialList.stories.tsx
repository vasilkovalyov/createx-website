import type { Meta, StoryObj } from '@storybook/react'
import SocialList from '.'

import { model } from './SocialList.model'

const meta: Meta<typeof SocialList> = {
  title: 'Components/SocialList',
  component: SocialList,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof SocialList>

export const Default: Story = {
  args: {
    ...model,
  },
}

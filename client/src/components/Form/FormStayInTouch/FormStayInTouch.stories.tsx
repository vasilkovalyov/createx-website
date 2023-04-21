import type { Meta, StoryObj } from '@storybook/react'
import FormStayInTouch from '.'

const meta: Meta<typeof FormStayInTouch> = {
  title: 'Forms/Form Stay In Touch',
  component: FormStayInTouch,
  parameters: {
    layout: 'padded',
  },
}
export default meta

import { model } from './FormStayInTouch.model'

type Story = StoryObj<typeof FormStayInTouch>

export const Default: Story = {
  args: {
    ...model,
  },
}

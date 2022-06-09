import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IcoMoonIcon from '../../components/theme/plain/IcoMoonIcon'
import { EnumsIcon } from '../../enums/icons'

export default {
  title: 'Components/IcoMoonIcon',
  component: IcoMoonIcon,
  argTypes: {
    icon: {
      options: EnumsIcon,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof IcoMoonIcon>

const Template: ComponentStory<typeof IcoMoonIcon> = (args) => <IcoMoonIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
}

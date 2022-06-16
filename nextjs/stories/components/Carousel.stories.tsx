import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from '../../components/theme/plain/Carousel'

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    size: {
      options: ['small', ''],
      control: { size: 'check' },
    },
  },
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />

export const Default = Template.bind({})

const data = () => (
    <div>slide</div>
  )
  const data1 = () => (
      <div>slide</div>
  )
  const data2 = () => (
      <div>slide</div>
  )
  const data3 = () => (
    <div>slide</div>
  )
  const data4 = () => (
      <div>slide</div>
  )
  const data5 = () => (
      <div>slide</div>
  )

Default.args = {
    slides: [
        data,
        data1,
        data2,
        data3,
        data4,
        data5,
    ]
}

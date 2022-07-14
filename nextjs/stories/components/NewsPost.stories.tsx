import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NewsPost from '../../components/theme/plain/NewsPost'
import { EnumsIcon } from '../../enums/icons'

export default {
  title: 'Components/NewsPost',
  component: NewsPost,
} as ComponentMeta<typeof NewsPost>

const Template: ComponentStory<typeof NewsPost> = (args) => <NewsPost {...args} />

export const Default = Template.bind({})
Default.args = {
  Image: {
    Url: '/images/article-img.jpg',
    Alt: 'How to Build Climate Change-Resilient Infrastructure',
  },
  Title: 'How to Build Climate Change-Resilient Infrastructure',
  Text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...',
  Category: 'Industry News',
  Date: 'June 24, 2020',
  Slug: '/how-to-build-climate-change-resilient-infrastructure',
}

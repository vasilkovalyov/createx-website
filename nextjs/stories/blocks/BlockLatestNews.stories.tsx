import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockLatestNews from '../../components/theme/plain/BlockLatestNews'
import { IBlockNews } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default {
  title: 'Blocks/BlockLatestNews',
  component: BlockLatestNews,
} as ComponentMeta<typeof BlockLatestNews>

const Template: ComponentStory<typeof BlockLatestNews> = (args) => <BlockLatestNews {...args} />

const model: IBlockNews = {
  BlockType: Block.BlockLatestNews,
  Title: 'Recent news',
  Items: [
    {
      id: '1',
      Image: {
        Url: '/images/image-service-description.jpg',
        Alt: 'We offer image',
      },
      Categories: [
        {
          Name: 'industry-news',
          Title: 'Industry News',
        },
      ],
      Slug: 'how-to-build-climate-change-resilient-infrastructure',
      Title: 'How to Build Climate Change-Resilient Infrastructure',
      Text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...',
      Date: '2020-06-24',
      Link: {
        url: '',
        text: '',
      },
    },
    {
      id: '2',
      Image: {
        Url: '/images/image-service-description.jpg',
        Alt: 'We offer image',
      },
      Categories: [
        {
          Name: 'industry-news',
          Title: 'Industry News',
        },
      ],
      Slug: 'how-to-build-climate-change-resilient-infrastructure',
      Title: 'How to Build Climate Change-Resilient Infrastructure',
      Text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...',
      Date: '2020-06-24',
      Link: {
        url: '',
        text: '',
      },
    },
    {
      id: '3',
      Image: {
        Url: '/images/image-service-description.jpg',
        Alt: 'We offer image',
      },
      Categories: [
        {
          Name: 'industry-news',
          Title: 'Industry News',
        },
      ],
      Slug: 'how-to-build-climate-change-resilient-infrastructure',
      Title: 'How to Build Climate Change-Resilient Infrastructure',
      Text: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...',
      Date: '2020-06-24',
      Link: {
        url: '',
        text: '',
      },
    },
  ],
  Categories: [],
}

export const Default = Template.bind({})
Default.args = model

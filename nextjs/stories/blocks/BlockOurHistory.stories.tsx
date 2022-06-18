import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockOurHistory from '../../components/theme/plain/BlockOurHistory'

export default {
	title: 'Blocks/BlockOurHistory',
	component: BlockOurHistory,
} as ComponentMeta<typeof BlockOurHistory>

const Template: ComponentStory<typeof BlockOurHistory> = (args) => <BlockOurHistory {...args} />

export const Default = Template.bind({})
Default.args = {
	Title: 'Our history',
	Items: [
		{
			id: '1',
			Image: {
				Url: '/images/history-image.jpg',
				Alt: 'image description',
			},
			Text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
            Date: '2022-06-07',
        },
        {
			id: '2',
			Image: {
				Url: '/images/history-image.jpg',
				Alt: 'image description',
			},
			Text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
            Date: '2021-03-17',
        },
        {
			id: '3',
			Image: {
				Url: '/images/history-image.jpg',
				Alt: 'image description',
			},
			Text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
            Date: '2020-09-02',
        },
        {
			id: '4',
			Image: {
				Url: '/images/history-image.jpg',
				Alt: 'image description',
			},
			Text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
            Date: '2019-11-23',
        },
		{
			id: '5',
			Image: {
				Url: '/images/history-image.jpg',
				Alt: 'image description',
			},
			Text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
            Date: '2018-01-12',
        },
        {
			id: '6',
			Image: {
				Url: '/images/history-image.jpg',
				Alt: 'image description',
			},
			Text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, ',
            Date: '2017-12-27',
        },
	]
}

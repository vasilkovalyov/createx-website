import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockConstructiveDecisions from '../../components/theme/plain/BlockConstructiveDecisions'

export default {
  title: 'Blocks/BlockConstructiveDecisions',
  component: BlockConstructiveDecisions,
} as ComponentMeta<typeof BlockConstructiveDecisions>

const Template: ComponentStory<typeof BlockConstructiveDecisions> = (args) => <BlockConstructiveDecisions {...args} />

export const Default = Template.bind({})
Default.args = {
	Overlay: false,
	Reverse: false,
  	Title: 'Constructive decisions',
  	Image: {
		Url: '/images/constructive-decisions.jpg',
		Alt: 'constructive decisions'
	},
	List: {
		Items: [
			{
				id: '1',
				Text: 'Vitae ultrices ornare eu sed in est quisque duis id.',
			},
			{
				id: '2',
				Text: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
			},
			{
				id: '3',
				Text: 'Mauris odio pellentesque commodo, diam.',
			},
			{
				id: '4',
				Text: 'Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.',
			},
			{
				id: '5',
				Text: 'At pharetra libero blandit risus, fringilla sed commodo diam.',
			},
			{
				id: '6',
				Text: 'Integer ultricies viverra ut enim viverra ut.',
			},
		]
	}
}

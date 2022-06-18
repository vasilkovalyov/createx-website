import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockOurOffices from '../../components/theme/plain/BlockOurOffices'

export default {
	title: 'Blocks/BlockOurOffices',
	component: BlockOurOffices,
} as ComponentMeta<typeof BlockOurOffices>

const Template: ComponentStory<typeof BlockOurOffices> = (args) => <BlockOurOffices {...args} />

export const Default = Template.bind({})
Default.args = {
	Title: 'Our offices',
    Text: 'Give us a call, send us a note or visit our office. We can’t wait to hear from you!',
	Items: [
		{
            id: '1',
            Title: 'New York, USA',
            Address: '8502 Preston Rd. Inglewood, New York 98380',
            Phone: '(405) 555-0128',
            Email: 'hello@createx.com',
            Schedule: 'Mon - Fri 9:00 - 18:00',
        },
        {
            id: '2',
            Title: 'New Jersey, USA',
            Address: '2464 Royal Ln. Mesa, New Jersey 45463',
            Phone: '(808) 555-0111',
            Email: 'hello@createx.com',
            Schedule: 'Mon - Fri 9:00 - 18:00',
        },
        {
            id: '3',
            Title: 'San Francisco, USA',
            Address: '8502 Preston Rd. Inglewood, San Francisco 98380',
            Phone: '(505) 555-0125',
            Email: 'hello@createx.com',
            Schedule: 'Mon - Fri 10:00 - 19:00',
        }
	]
}

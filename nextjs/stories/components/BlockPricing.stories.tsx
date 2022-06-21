import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockPricing from '../../components/theme/plain/BlockPricing'
import { AlignContentType } from '../../types/common'

export default {
    title: 'Blocks/BlockPricing',
    component: BlockPricing,
} as ComponentMeta<typeof BlockPricing>

const Template: ComponentStory<typeof BlockPricing> = (args) => <BlockPricing {...args} />

export const Default = Template.bind({})

Default.args = {
    BlockType: "blockPrice",
    Title: 'Pricing',
    Text: 'We offer you three categories of construction.',
    PriceCol: [
        {
            id: "4",
            PriceCost: "$20 per m2",
            PricePlan: "basic"
        },
        {
            id: "5",
            PriceCost: "$30 per m2",
            PricePlan: "standard"
        },
        {
            id: "6",
            PriceCost: "$40 per m2",
            PricePlan: "business"
        }
    ],
    PriceRow: [
        {
            id: "2",
            Title: "Installation plan",
            Plan1: "basic",
            Text1: null,
            Available1: true,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "3",
            Title: "Planning solutions (2-3 options)",
            Plan1: "basic",
            Text1: null,
            Available1: true,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "4",
            Title: "Lighting plan",
            Plan1: "basic",
            Text1: null,
            Available1: true,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "5",
            Title: "Flooring plan",
            Plan1: "basic",
            Text1: null,
            Available1: true,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "6",
            Title: "Heating floor laying scheme",
            Plan1: "basic",
            Text1: null,
            Available1: true,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "7",
            Title: "Air conditioner zones layout",
            Plan1: "basic",
            Text1: null,
            Available1: true,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "8",
            Title: "3D visualization of all rooms",
            Plan1: "basic",
            Text1: "simplified",
            Available1: null,
            Plan2: "standard",
            Text2: null,
            Available2: true,
            Plan3: "business",
            Text3: null,
            Available3: true
        },
        {
            id: "10",
            Title: "Visualization of each room (3-4 angles)",
            Plan1: "basic",
            Text1: null,
            Available1: null,
            Plan2: "standard",
            Text2: null,
            Available2: null,
            Plan3: "business",
            Text3: null,
            Available3: null
        },
        {
            id: "9",
            Title: "Terms",
            Plan1: null,
            Text1: "10 days",
            Available1: null,
            Plan2: null,
            Text2: "20 days",
            Available2: null,
            Plan3: null,
            Text3: "30 days",
            Available3: null
        }
    ]
} 

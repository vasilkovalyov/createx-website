import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Testimonial from '../../components/theme/plain/Testimonial'

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
} as ComponentMeta<typeof Testimonial>

const Template: ComponentStory<typeof Testimonial> = (args) => <Testimonial {...args} />

export const Default = Template.bind({})
Default.args = {
  Image: {
    Url: '/images/author-testimonial.jpg',
    Alt: 'Courtney Alexander',
  },
  Image2: {
    Url: '/images/signature.png',
    Alt: 'Courtney Alexander signature',
  },
  Text: `
        <p>
            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
        </p>
        <p>
            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer. 
        </p>
    `,
  Name: 'Courtney Alexander',
  Position: 'CEO - Createx Construction Bureau ',
}

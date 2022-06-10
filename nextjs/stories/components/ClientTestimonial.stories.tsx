import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ClientTestimonial from '../../components/theme/plain/ClientTestimonial'

export default {
  title: 'Components/ClientTestimonial',
  component: ClientTestimonial,
} as ComponentMeta<typeof ClientTestimonial>

const Template: ComponentStory<typeof ClientTestimonial> = (args) => <ClientTestimonial {...args} />

export const Default = Template.bind({})
Default.args = {
    Image: {
        Url: '/images/profile-image.jpg',
        Alt: 'Shawn Edwards',
    },
    Text: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ',
    Name: 'Shawn Edwards',
    Position: 'Position, Company name',
}

// "id": "1",
// "BlockType": "blockOurClients",
// "Title": "What our clients are saying",
// "Items": [
//     {
//     "id": "1",
//     "Image": {
//         "data": {
//         "attributes": {
//             "url": "/uploads/profile_image_24b7e8a02f.jpg"
//         }
//         }
//     },
//     "ImageAlt": "Shawn Edwards",
//     "Name": "Shawn Edwards",
//     "Position": "Position, Company name"
//     },
//     {
//     "id": "2",
//     "Image": {
//         "data": {
//         "attributes": {
//             "url": "/uploads/profile_image_24b7e8a02f.jpg"
//         }
//         }
//     },
//     "ImageAlt": "Shawn Edwards",
//     "Name": "Shawn Edwards",
//     "Position": "Position, Company name"
//     },
//     {
//     "id": "3",
//     "Image": {
//         "data": {
//         "attributes": {
//             "url": "/uploads/profile_image_24b7e8a02f.jpg"
//         }
//         }
//     },
//     "ImageAlt": "Shawn Edwards",
//     "Name": "Shawn Edwards",
//     "Position": "Position, Company name"
//     }
// ]
// }
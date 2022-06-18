import React from 'react'

import Typography from './Typography'
import Button from './Button'
import Carousel from './Carousel'
import Container from './Container'
import Image from './Image'

import { IBlockImageGallery } from '../../../interfaces/blocks'

export default function BlockImageGallery({ BlockType, Items }: IBlockImageGallery) {
  return (
    <section className="block-image-gallery">
        <Container className="block-image-gallery__container">
            <Carousel slides={Items.map((item, index) => (
                <div key={index} className="block-image-gallery__slide">
                    <Image Url={item.Url} Alt={item.Alt} className="block-image-gallery__image" />
                </div>
            ))} className="block-image-gallery__carousel" settings={{
                pagination: {
                    el: '.gallery-thumbnails',
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<div class="${className} gallery-thumbnail">
                            <img src="${Items[index].Url}" alt="${Items[index].Alt}" class="gallery-thumbnail__image" />
                        </div>`
                    }
                }
            }} />
            <div className="gallery-thumbnails"></div>
        </Container>
    </section>
  )
}

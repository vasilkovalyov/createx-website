import React from 'react'

import Carousel from './Carousel'
import Container from './Container'
import Image from './Image'

import { IBlockImageGallery } from '../../../interfaces/blocks'
import { getImageBasePath } from '../../../utilities/common'

export default function BlockImageGallery({ Items }: IBlockImageGallery) {
  const base = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : ''

  return (
    <section className="block-image-gallery">
      <Container className="block-image-gallery__container">
        {Items && Items.length ? (
          <Carousel
            slides={Items.map((item, index) => (
              <div key={index} className="block-image-gallery__slide">
                <Image Url={item.Url} Alt={item.Alt} className="block-image-gallery__image" />
              </div>
            ))}
            className="block-image-gallery__carousel"
            settings={{
              pagination: {
                el: '.gallery-thumbnails',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<div class="${className} gallery-thumbnail">
                                <img src="${getImageBasePath(Items[index].Url)}" alt="${
                    Items[index].Alt
                  }" class="gallery-thumbnail__image" />
                            </div>`
                },
              },
            }}
          />
        ) : null}
        <div className="gallery-thumbnails"></div>
      </Container>
    </section>
  )
}

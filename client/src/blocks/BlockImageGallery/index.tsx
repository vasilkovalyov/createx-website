import React from 'react'
import cn from 'classnames'

import Image from 'next/image'
import Carousel from '../../components/Carousel'

import { IBlockImageGallery } from './BlockImageGallery.type'
import { getImageBasePath } from '../../utils/common'

export default function BlockImageGallery({ items, className }: IBlockImageGallery) {
  return (
    <section className={cn('block-image-gallery pt-40 overflow-hidden', className)}>
      <div className="block-image-gallery__container container">
        <Carousel
          slides={items.map((item, index) => (
            <div key={index} className="block-image-gallery__slide">
              <Image {...item} fill className="block-image-gallery__image object-cover rounded-sm overflow-hidden" />
            </div>
          ))}
          className="block-image-gallery__carousel relative"
          settings={{
            pagination: {
              el: '.gallery-thumbnails',
              clickable: true,
              renderBullet: (index, className) => {
                return `<div class="${className} gallery-thumbnail">
                                <img src="${items[index].src}" alt="${items[index].alt}" class="gallery-thumbnail__image object-cover" />
                            </div>`
              },
            },
          }}
        />
        <div className="gallery-thumbnails"></div>
      </div>
    </section>
  )
}

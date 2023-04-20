import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Typography from '../../components/Typography'
import Carousel from '../../components/Carousel'
import ClientQuote from '../../components/ClientQuote'

import { IBlockClientSays } from './BlockClientSays.type'

function BlockClientSays({ heading, items, image, className }: IBlockClientSays) {
  return (
    <div className={cn('block-client-says relative', className)}>
      <div className="block-client-says__container container relative z-1">
        <div className="md:flex md:justify-between">
          <div className="md:w-6/12">
            {heading ? (
              <Typography level="h2" className="block-client-says__heading mb-24 md:mb-60">
                {heading}
              </Typography>
            ) : null}
            {items.length ? (
              <Carousel
                className="block-client-says__carousel relative"
                slides={items.map((item) => (
                  <ClientQuote key={item.id} {...item} className="" />
                ))}
              />
            ) : null}
          </div>
          <div className="hidden md:block w-5/12">
            {image ? (
              <div className="block-client-says__image">
                <Image {...image} className="object-cover ml-auto" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockClientSays

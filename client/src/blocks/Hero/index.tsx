import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Typography from '../../components/Typography'

import { IHero } from './Hero.type'

function Hero({ heading, image, text, className }: IHero) {
  return (
    <div className={cn('block-hero relative', className)}>
      {image ? (
        <div className="block-hero__bg-image fill-absolute">
          <Image {...image} className="object-cover" fill />
        </div>
      ) : null}
      <div className="block-hero__container container mx-auto px-24 relative">
        <div className="block-hero__body">
          <Typography level="h1" className="mb-24">
            {heading}
          </Typography>
          {text ? <Typography className="text-gray-700 text-xl">{text}</Typography> : null}
        </div>
      </div>
    </div>
  )
}

export default Hero

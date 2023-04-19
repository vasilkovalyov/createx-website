import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import Typography from '../../components/Typography'
import Carousel from '../../components/Carousel'
import Button from '../../components/Button'

import { IBlockHeroCarousel } from './BlockHeroCarousel.type'

function BlockHeroCarousel({ heading, text, items, className }: IBlockHeroCarousel) {
  return (
    <div className={cn('block-hero-carousel', className)}>
      <Carousel
        className="block-hero-carousel__carousel"
        slides={items.map((item, index) => (
          <div key={index} className="block-hero-carousel__slide">
            <Image {...item} className="block-hero-carousel__slide-image" fill />
          </div>
        ))}
      />
      <div className="block-hero-carousel__container container relative z-1 flex flex-col justify-center">
        <div className="block-hero-carousel__body">
          <Typography level="h1" className="block-hero-carousel__heading mb-24 text-white">
            {heading}
          </Typography>
          {text ? (
            <Typography className="block-hero-carousel__text text-lg lg:text-xl text-white mb-40 tablet:mb-60">
              {text}
            </Typography>
          ) : null}
          <div className="flex flex-wrap">
            <Button fill="outline" color="white" className="mr-24 mb-16">
              Learn more about us
            </Button>
            <Button className="mb-16">SUBMIT REQUEST</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockHeroCarousel

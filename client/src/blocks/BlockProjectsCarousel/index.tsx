import React from 'react'
import cn from 'classnames'

import Typography from '../../components/Typography'
import ProductPreview from '../../components/ProductPreview'
import Carousel from '../../components/Carousel'

import { IBlockProjectsCarousel } from './BlockProjectsCarousel.type'

import { swiperForThreeVisiblePosts } from '../../components/Carousel/Carousel.settings'

function ProjectsCarousel({ heading, items, className }: IBlockProjectsCarousel) {
  return (
    <div className={cn('block-projects-carousel py-40 tablet:py-80 desktop:py-120 ', className)}>
      <div className="block-projects-carousel__container container">
        <Typography level="h2" className="block-projects-carousel__heading mb-24 lg:mb-60">
          {heading}
        </Typography>
        <Carousel
          className="block-projects-carousel__carousel relative"
          slides={items.map((item, index) => (
            <ProductPreview key={item.id} {...item} className="" />
          ))}
          settings={swiperForThreeVisiblePosts}
        />
      </div>
    </div>
  )
}

export default ProjectsCarousel

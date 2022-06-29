import React from 'react'

import Typography from './Typography'
import Button from './Button'
import Carousel from './Carousel'
import Container from './Container'
import ProjectCard from './ProjectCard'
import BlockHeading from './BlockHeading'

import { IBlockLatestProjects } from '../../../interfaces/blocks'

import { swiperForThreeVisiblePosts } from '../../../utilities/swiper'

export default function BlockLatestProjects({ Title, Text, Link, Items }: IBlockLatestProjects) {
  return (
    <section className="block-latest-project">
      <Container className="block-latest-project__container">
        <BlockHeading Title={Title} />
        {Items && Items.length ? (
          <Carousel
            slides={Items.map((item, index) => (
              <div key={index} className="block-latest-project__slide">
                <ProjectCard {...item} />
              </div>
            ))}
            className="block-latest-project__carousel"
            settings={{ ...swiperForThreeVisiblePosts }}
            typeButton="secondary"
          />
        ) : null}

        <div className="block-additional-info block-latest-project__additional-info">
          {Text && <Typography level="h4" text={Text} className="block-additional-info__title" />}
          {Link && <Button className="block-additional-info__btn" name={Link.text} url={Link.url} />}
        </div>
      </Container>
    </section>
  )
}

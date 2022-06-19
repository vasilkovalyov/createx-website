import React from 'react'

import Typography from './Typography'
import Button from './Button'
import Carousel from './Carousel'
import Container from './Container'
import Image from './Image'

import { IBlockIntroCarousel } from '../../../interfaces/blocks'

export default function BlockIntroCarousel({ Items, Title, Link, Text }: IBlockIntroCarousel) {
  return (
    <section className="block-intro-carousel">
			<div className="block-intro-carousel__inner">
				<Container className="block-intro-carousel__container">
					<div className="block-intro-carousel__content">
						{ Title && <Typography level="h1" text={Title} className="block-intro-carousel__title text-color-light"  /> }
						{ Text && <Typography text={Text} className="block-intro-carousel__text text-lg text-color-light"  /> }
						{ Link && <Button className="block-intro-carousel__btn" name={Link.text} url={Link.url} outline={true} color="white" /> }
					</div>
				</Container>
				{
					Items && Items.length ? (
						<Carousel slides={Items.map((item, index) => (
							<div key={index} className="block-intro-carousel__slide">
								<Image Url={item.Url} Alt={item.Alt} className="block-intro-carousel__image" />
							</div>
						))} className="block-intro-carousel__carousel" settings={{
							pagination: {
								clickable: true,
								renderBullet: (index, className) => {
									return `<div class=${className}>
										<span class=${className}__count>0${index + 1}</span>
									</div>`
									
								}
							}
						}} />
					) : null
				}
			</div>
    </section>
  )
}

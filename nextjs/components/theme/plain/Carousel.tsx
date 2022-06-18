import React, { useRef } from 'react'

import cn from 'classnames'
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

import { ICarousel } from '../../../interfaces/common'
import IcoMoonIcon from './IcoMoonIcon'
import { EnumsIcon } from '../../../enums/icons'

type SwiperType = React.HTMLAttributes<HTMLElement> & {
	swiper: SwiperCore
}

export default function Carousel({ slides, settings, className, typeButton = 'primary', useCustomNavigation = true}: ICarousel) {
	const sliderRef = useRef<SwiperType>(null)
	const navigationPrevRef = useRef(null)
  	const navigationNextRef = useRef(null)

	const typeButtonClass = cn({
		'swiper-button--primary': typeButton === 'primary',
		'swiper-button--secondary': typeButton === 'secondary',
	})

	return (
		<div className={`carousel ${className ? className : ''}`}>
			<div className="carousel__wrapper">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					onSwiper={(swiper: any) => {
						setTimeout(() => {
							if (useCustomNavigation) {
								swiper.params.navigation.prevEl = navigationPrevRef.current
								swiper.params.navigation.nextEl = navigationNextRef.current
								swiper.navigation.destroy()
								swiper.navigation.init()
								swiper.navigation.update()
							}
						})
					}}
					{...settings}
				>
					{
						slides.length && slides.map((slide, index) => (
							<SwiperSlide key={index}>{slide}</SwiperSlide>
						))
					}
				</Swiper>
			</div>
			{
				useCustomNavigation ? (
					<div className="swiper-button-control">
						<button className={`swiper-button swiper-button-prev ${typeButtonClass}`} ref={navigationPrevRef}>
							<IcoMoonIcon icon={EnumsIcon.ArrowLeft} className="swiper-button__icon" />
						</button>
						<button className={`swiper-button swiper-button-next ${typeButtonClass}`} ref={navigationNextRef}>
							<IcoMoonIcon icon={EnumsIcon.ArrowRight} className="swiper-button__icon" />
						</button>
					</div>
				) : null
			}
		</div>
	)
}

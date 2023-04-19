import { SwiperOptions } from 'swiper'

export interface ICarousel {
  slides: React.ReactNode[]
  className?: string
  useCustomNavigation?: boolean
  settings?: SwiperOptions
  typeButton?: 'primary' | 'secondary'
}

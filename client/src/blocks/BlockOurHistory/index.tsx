import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Carousel from '../../components/Carousel'
import Typography from '../../components/Typography'

import { IBlockOurHistory } from './BlockOurHistory.type'

import { getHistoryDate } from '../../utils/dateFormattings'

export default function BlockOurHistory({ heading, items, className }: IBlockOurHistory) {
  return (
    <section className={cn('block-our-history', className)}>
      <div className="block-our-history__inner">
        <div className="block-our-history__container container">
          {heading ? (
            <Typography level="h2" className="mb-40 md:mb-60">
              {heading}
            </Typography>
          ) : null}
          {items && items.length ? (
            <div className="block-our-history__body md:flex">
              <div className="md:w-4/12">
                <div className="history-list"></div>
              </div>
              <div className="md:w-8/12">
                <Carousel
                  slides={items.map((item) => (
                    <div key={item.id} className="block-our-history__slide">
                      <div className="history">
                        <Image
                          {...item.image}
                          width={810}
                          height={450}
                          className="history__image object-cover mb-36 rounded-sm overflow-hidden"
                        />
                        {item.text && <Typography className="history__text">{item.text}</Typography>}
                      </div>
                    </div>
                  ))}
                  settings={{
                    pagination: {
                      el: '.history-list',
                      clickable: true,
                      renderBullet: (index, className) => {
                        return `<div class="${className} history-list__item">
                                            <strong class="history-list__date">${getHistoryDate(
                                              items[index].date,
                                              'Present',
                                            )}</strong>
                                        </div>`
                      },
                    },
                  }}
                  className="block-our-history__carousel"
                  typeButton="secondary"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

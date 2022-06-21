import React from 'react'

import Image from './Image'
import Carousel from './Carousel'
import Container from './Container'
import Typography from './Typography'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockOurHistory } from '../../../interfaces/blocks'

import { getHistoryDate } from '../../../utilities/dateFormatting'

export default function BlockOurHistory({ Title, Items }: IBlockOurHistory) {
  return (
    <section className="block-our-history">
      <div className="block-our-history__inner">
        <div className="block-our-history__overlay"></div>
        <Container className="block-our-history__container">
          <BlockHeading Title={Title} />
          <Row justify="flex-end">
            <Col base={12} md={5} lg={4}>
              <div className="history-list"></div>
            </Col>
            <Col base={12} md={7} lg={8}>
              <Carousel
                slides={Items.map((item) => (
                  <div key={item.id} className="block-our-history__slide">
                    <div className="history">
                      {item.Image.Url && <Image Url={item.Image.Url} Alt={item.Image.Alt} className="history__image" />}
                      <Typography text={item.Text} className="history__text" />
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
                                          Items[index].Date,
                                          'Present',
                                        )}</strong>
                                    </div>`
                    },
                  },
                }}
                className="block-our-history__carousel"
                typeButton="secondary"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

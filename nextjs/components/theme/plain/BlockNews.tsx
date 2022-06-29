import React from 'react'

import Button from './Button'
import Container from './Container'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'
import NewsPost from './NewsPost'
import NewsCategories from './NewsCategories'

import { IBlockNews } from '../../../interfaces/blocks'

export default function BlockNews({ Title, Categories, Items }: IBlockNews) {
  return (
    <section className="block-news">
      <Container className="block-news__container">
        <BlockHeading Title={Title} aligned="center" />
        <NewsCategories Items={Categories} />
        {Items && Items.length ? (
          <Row>
            {Items.map((post) => (
              <Col key={post.id} base={12} md={6}>
                <NewsPost {...post} />
              </Col>
            ))}
          </Row>
        ) : null}
      </Container>
    </section>
  )
}

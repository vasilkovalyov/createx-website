import React from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import NewsPost from './NewsPost'
import BlockHeading from './BlockHeading'

import { IBlockNews } from '../../../interfaces/blocks'

export default function BlockLatestNews({ Title, Items }: IBlockNews) {
  return (
    <section className="block-latest-news">
      <Container className="block-latest-news__container">
        <BlockHeading Title={Title} aligned="center" />
        <Row>
          <Col base={12} md={7} className="flex">
            {Items[0] && <NewsPost {...Items[0]} />}
          </Col>
          <Col base={12} md={5}>
            {Items && Items.length > 1 ? (
              <Row>
                {Items.map((post, index) => {
                  if (index > 0) {
                    return <NewsPost key={post.id} {...post} IsCompact={true} />
                  }
                })}
              </Row>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

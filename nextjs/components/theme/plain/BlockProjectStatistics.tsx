import React from 'react'

import Container from './Container'
import Benefit from './Benefit'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockProjectStatistics } from '../../../interfaces/blocks'

export default function BlockProjectStatistics({ Items }: IBlockProjectStatistics) {
  return (
    <section className="block-project-statistics">
      <Container className="block-project-statistics__container">
        <div className="block-project-statistics__items">
          <Row>
            {Items &&
              Items.length &&
              Items.map((item, index) => (
                <Col key={index} base={12} sm={6} lg={3}>
                  <Benefit {...item} className="project-statistics" />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

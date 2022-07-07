import React from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import Position from './Position'
import Row from './Grid/Row'
import Col from './Grid/Col'
import Button from './Button'

import { IBlockAvailablePositions } from '../../../interfaces/blocks'

export default function BlockAvailablePositions({ Items, Aside }: IBlockAvailablePositions) {
  return (
    <section className="block-available-positions">
      <Container className="block-testimonial__container">
        <Row justify="space-between">
          <Col md={7} lg={8} xl={7}>
            {Items && Items.length ? (
              <div className="block-available-positions__list">
                {Items.map((item) => (
                  <Position key={item.id} {...item} />
                ))}
              </div>
            ) : null}
          </Col>
          {Aside ? (
            <Col md={5} lg={4} xl={4}>
              <aside className="block-available-positions__aside">
                <BlockHeading Title={Aside.Title} Text={Aside.Text} headingLevel="h4" />
                <div className="block-available-positions__aside-buttons flex">
                  <Button name="subscribe" type="outline" fullwidth={true} />
                  <Button name="send cv" fullwidth={true} />
                </div>
              </aside>
            </Col>
          ) : null}
        </Row>
      </Container>
    </section>
  )
}

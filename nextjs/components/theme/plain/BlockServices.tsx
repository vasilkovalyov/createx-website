import React from 'react'

import Container from './Container'
import Service from './Service'
import Row from './Grid/Row'

import { IBlockService } from '../../../interfaces/blocks'

export default function BlockServices({ Items }: IBlockService) {
  return (
    <section className="block-services">
      <Container className="block-our-offices__container">
        {Items && Items.length ? (
          <Row>
            {Items.map((item, index) => (
              <Service key={index} {...item} type="post" reverse={index % 2 !== 0} />
            ))}
          </Row>
        ) : null}
      </Container>
    </section>
  )
}

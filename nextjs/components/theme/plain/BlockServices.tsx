import React from 'react'

import Container from './Container'
import Service from './Service'

import { IBlockService } from '../../../interfaces/blocks'

export default function BlockServices({ Items }: IBlockService) {
  return (
    <section className="block-services">
      <Container className="block-our-offices__container">
        {Items && Items.length ? (
          <>
            {Items.map((item, index) => (
              <Service key={index} {...item} type="post" reverse={index % 2 !== 0} />
            ))}
          </>
        ) : null}
      </Container>
    </section>
  )
}

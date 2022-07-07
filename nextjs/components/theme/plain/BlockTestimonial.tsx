import React from 'react'

import Container from './Container'
import Testimonial from './Testimonial'

import { IBlockTestimonial } from '../../../interfaces/blocks'

export default function BlockTestimonial({ Name, RichText, Image, Image2, Position }: IBlockTestimonial) {
  return (
    <section className="block-testimonial">
      <Container className="block-testimonial__container">
        <Testimonial Name={Name} RichText={RichText} Image={Image} Image2={Image2} Position={Position} />
      </Container>
    </section>
  )
}

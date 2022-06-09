import React from 'react'
import { ITestimonial } from '../../../interfaces/common'

export default function Image({ id, text, author }: ITestimonial) {
  return (
    <blockquote className="testimonial text-align--center">
      <p className="testimonial__text">{text}</p>
      <figcaption className="testimonial__author text-uppercase">{author}</figcaption>
    </blockquote>
  )
}

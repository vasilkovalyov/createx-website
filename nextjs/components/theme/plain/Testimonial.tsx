import React from 'react'
import ReactMarkdown from 'react-markdown'

import ImageComponent from './Image'
import Row from './Grid/Row'
import Col from './Grid/Col'
import Typography from './Typography'

import { ITestimonial } from '../../../interfaces/common'

export default function Testimonial({ Image, RichText, Name, Position, Image2 }: ITestimonial) {
  return (
    <div className="testimonial">
      {Image && Image.Url && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="testimonial__image" />}
      <div className="testimonial__body shadow-wrapper bg-color-white">
        <Row justify="space-between" className="testimonial__row">
          <Col base={12}>
            {RichText && (
              <div className="testimonial__text">
                <ReactMarkdown>{RichText}</ReactMarkdown>
              </div>
            )}
          </Col>
          <Col base={12} md={7}>
            <Typography text={Name} className="client-testimonial__author font-bold" />
            {Position && (
              <Typography text={Position} className="client-testimonial__position text-xs text-color-secondary" />
            )}
          </Col>
          {Image2 && Image2.Url && (
            <Col base={12} md={5}>
              <ImageComponent Url={Image2.Url} Alt={Image2.Alt} className="testimonial__signature" />
            </Col>
          )}
        </Row>
      </div>
    </div>
  )
}

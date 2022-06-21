import React from 'react'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Input from './Input'
import Button from '../Button'
import Typography from '../Typography'

export default function SubscribeForm() {
  return (
    <div className="subscribe-form">
      <Typography level="h4" text="Subscribe to our newsletter" className="subscribe-form__title" aligned="center" />
      <form action="" className="subscribe-form__form">
        <Row>
          <Col base={12}>
            <Input name="name" label="Name" placeholder="Your name" required={true} size="small" />
          </Col>
          <Col base={12}>
            <Input
              name="email"
              label="Email"
              placeholder="Your working email"
              type="email"
              required={true}
              size="small"
            />
          </Col>
          <Col base={12} className="subscribe-form__btn-wrapper text-align--center">
            <Button className="subscribe-form__btn" name="Send" fullwidth={true} size="small" />
          </Col>
        </Row>
      </form>
    </div>
  )
}

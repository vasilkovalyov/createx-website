import React from 'react'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Input from './Input'
import TextArea from './TextArea'
import Checkbox from './Checkbox'
import Select from './Select'
import RadioGroup from './RadioGroup'
import Button from '../Button'

import LocationsSelect from '../../../hocs/LocationsSelect'
import { ISelect, IRadio } from 'interfaces/form'
import { ILocationsSelect } from 'interfaces/hocs'

export default function CtaForm() {
  const locationChange = (location: string) => {
    console.log(location)
  }
  const HocLocationsSelect = LocationsSelect({
    Component: Select,
    onChange: locationChange,
    rest: {
      label: 'Location',
      required: true,
    },
  } as ILocationsSelect<ISelect>)

  const radioGroup = [
    {
      id: '1',
      label: 'Phone',
      name: 'contact',
      value: 'phone',
      checked: false,
    },
    {
      id: '2',
      label: 'Email',
      name: 'contact',
      value: 'email',
      checked: false,
    },
    {
      id: '3',
      label: 'Viber',
      name: 'contact',
      value: 'viber',
      checked: false,
    },
  ] as IRadio[]

  return (
    <div className="contact-form">
      <form action="" className="contact-form__form">
        <Row>
          <Col base={12} md={6}>
            <Input name="name" label="Name" placeholder="Your name" required={true} />
          </Col>
          <Col base={12} md={6}>
            <Select name="interested" label="Lnterested" placeholder="I am interested in" options={[]} />
          </Col>
          <Col base={12} md={6}>
            <Input name="phone" label="Phone" placeholder="Your phone number" required={true} />
          </Col>
          <Col base={12} md={6}>
            {HocLocationsSelect}
          </Col>
          <Col base={12} md={6}>
            <Input name="email" label="Email" placeholder="Your working email" />
          </Col>
          <Col base={12} md={6}>
            <RadioGroup items={radioGroup} label="Preferred contact method" />
          </Col>
          <Col base={12}>
            <TextArea name="message" label="Message" placeholder="Your message" rows={3} />
          </Col>
          <Col base={12}>
            <Row justify="space-between">
              <Col base={12} md={6}>
                <Checkbox
                  name={'agree'}
                  value={'agree'}
                  checked={false}
                  label="I agree to receive communications from Createx Construction Bureau."
                />
              </Col>
              <Col base={12} md={6} className="contact-form__btn-wrapper">
                <Button className="contact-form__btn" name="send request" />
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  )
}

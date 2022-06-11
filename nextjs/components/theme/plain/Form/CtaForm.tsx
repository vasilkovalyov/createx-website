import React from 'react'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Input from './Input'
import TextArea from './TextArea'
import Checkbox from './Checkbox'
import Button from '../Button'
import Typography from '../Typography'
import { HeadingLevel } from '../../../../enums/common'

export default function CtaForm() {
  return (
		<div className="cta-form shadow-wrapper">
			<Typography level={HeadingLevel.H4} text="A quick way to discuss details" className="cta-form__title" />
			<form action="" className="cta-form__form">
				<Row>
					<Col base={12}>
						<Input name='name' label="Name" placeholder="Your name" size="small" required={true} />
					</Col>
					<Col base={12}>
						<Input name='phone' label="Phone" placeholder="Your phone number" size="small" required={true} />
					</Col>
					<Col base={12}>
						<Input name='email' label="Email" placeholder="Your working email" type="email" size="small" />
					</Col>
					<Col base={12}>
						<TextArea name='message' label="Message" placeholder="Your message" size="small" rows={3} />
					</Col>
					<Col base={12}>
						<Checkbox name={'agree'} value={'agree'} checked={false} label="I agree to receive communications from Createx Construction Bureau." />
					</Col>
					<Col base={12} className="text-align--center">
						<Button className="cta-form__btn" name="send request" size="small" />
					</Col>
				</Row>
			</form>
		</div>
  )
}


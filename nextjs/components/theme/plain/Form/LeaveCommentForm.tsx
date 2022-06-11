import React from 'react'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Input from './Input'
import TextArea from './TextArea'
import Button from '../Button'
import Typography from '../Typography'
import { HeadingLevel } from '../../../../enums/common'

export default function LeaveCommentForm() {
  return (
		<div className="leave-comment-form">
			<Typography level={HeadingLevel.H2} text="Leave your comment" className="leave-comment-form__title" aligned="center" />
			<form action="" className="leave-comment-form__form">
				<Row>
					<Col base={12} md={6}>
						<Input name='name' label="Name" placeholder="Your name" required={true} />
					</Col>
					<Col base={12} md={6}>
						<Input name='email' label="Email" placeholder="Your working email" type="email" required={true} />
					</Col>
					<Col base={12}>
						<TextArea name='message' label="Message" placeholder="Your message" rows={4} />
					</Col>
					<Col base={12} className="leave-comment-form__btn-wrapper text-align--center">
						<Button className="leave-comment-form__btn" name="Post comment" />
					</Col>
				</Row>
			</form>
		</div>
  )
}


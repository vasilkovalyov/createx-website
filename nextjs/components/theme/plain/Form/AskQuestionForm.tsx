import React from 'react'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Input from './Input'
import Button from '../Button'
import Typography from '../Typography'


export default function CtaForm() {
    return (
        <div className="ask-question-form shadow-wrapper">
			<Typography level="h4" text="Want to know more? Ask us a question:" className="ask-question-form__title" aligned="center" />
            <form action="" className="ask-question-form__form">
                <Row alignItems='flex-end' justify='space-between'>
                    <Col base={12} md={3}>
                        <Input name='name' label="Name" placeholder="Your name" size="small" required={true} />
                    </Col>
                    <Col base={12} md={3}>
                        <Input name='phone' label="Phone" placeholder="Your phone" size="small" required={true} />
                    </Col>
                    <Col base={12} md={4}>
                        <Input name='message' label="Message" placeholder="Your message" size="small" />
                    </Col>
                    <Col base={12} md={2} className="ask-question-form__btn-wrapper">
                        <div className="form-field">
                            <Button className="ask-question-form__btn" name="send" size="small" fullwidth={true} />
                        </div>
                    </Col>
                </Row>
            </form>
        </div>
    )
}


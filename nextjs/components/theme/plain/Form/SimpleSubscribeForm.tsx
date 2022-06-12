import React from 'react'
import Input from './Input'
import Button from '../Button'
import Typography from '../Typography'

export default function SimpleSubscribeForm() {
  return (
    <div className="simple-subscribe-form text-color-light">
        <Typography level="h5" text="Let’s stay in touch" className="simple-subscribe-form__title" />
        <form action="" className="simple-subscribe-form__form">
            <Input name='email' placeholder="Your email address" required={true} size="small" theme="dark" />
            <Button className="simple-subscribe-form__btn" name="subscribe" size="small" />
        </form>
        <Typography
            text="*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau."
            className="simple-subscribe-form__description"
        />
    </div>
  )
}


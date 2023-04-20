import React from 'react'
import cn from 'classnames'
import { IFormDetails } from './FormDetails.type'

import Input from '../Input'
import Textarea from '../Textarea'
import Button from '../../Button'

import Typography from '../../Typography'

function FormDetails({ heading, className, onSubmit }: IFormDetails) {
  return (
    <div className={cn('form-details bg-white', className)}>
      {heading ? (
        <Typography level="h4" className="text-center mb-24">
          {heading}
        </Typography>
      ) : null}
      <form className="">
        <Input id="name" name="name" label="Name" placeholder="Your name" required />
        <Input id="phone" name="phone" label="Phone" placeholder="Your phone number" required />
        <Input id="email" name="email" label="Email" placeholder="Your working email" required />
        <Textarea id="message" name="message" label="Message" placeholder="Your message" required />
        <div className="text-center">
          <Button type="submit" className="text-uppercase">
            send request
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormDetails

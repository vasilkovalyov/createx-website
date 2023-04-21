import React from 'react'
import cn from 'classnames'
import { IFormStayInTouch } from './FormStayInTouch.type'

import Input from '../Input'
import Button from '../../Button'

import Typography from '../../Typography'

function FormDetails({ heading, text, className, onSubmit }: IFormStayInTouch) {
  return (
    <div className={cn('form-stay-in-touch', className)}>
      {heading ? (
        <Typography level="h4" className="mb-24">
          {heading}
        </Typography>
      ) : null}
      <form className="">
        <div className="form-stay-in-touch__field-box relative">
          <Input id="email" name="email" placeholder="Your email address" required />
          <Button type="submit" className="text-uppercase sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:h-full py-8">
            subscribe
          </Button>
        </div>
        <Typography className="text-xs text-black text-opacity-60">{text}</Typography>
      </form>
    </div>
  )
}

export default FormDetails

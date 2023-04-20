import React from 'react'
import cn from 'classnames'
import { IInput } from './Input.type'

function Input({ id, label, className, ...rest }: IInput) {
  return (
    <div className={cn('input-field', className)}>
      <label htmlFor={id} className="input-field__inner">
        {label ? (
          <p className="input-field__label">
            {label} {rest.required ? '*' : null}
          </p>
        ) : null}
        <input id={id} {...rest} className="input-field__input" />
      </label>
    </div>
  )
}

export default Input

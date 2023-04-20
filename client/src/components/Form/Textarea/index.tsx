import React from 'react'
import cn from 'classnames'
import { ITextarea } from './Textarea.type'

function Textarea({ id, label, className, rows = 2, ...rest }: ITextarea) {
  return (
    <div className={cn('input-field input-field--textarea', className)}>
      <label htmlFor={id} className="input-field__inner">
        {label ? (
          <p className="input-field__label">
            {label} {rest.required ? '*' : null}
          </p>
        ) : null}
        <textarea id={id} {...rest} rows={rows} className="input-field__input" />
      </label>
    </div>
  )
}

export default Textarea

import React, { useState } from 'react'
import cn from 'classnames'

import Radio from './Radio'
import { IRadioGroup } from '../../../../interfaces/form'

export default function RadioGroup({ items, label, size, required, onHandleChange }: IRadioGroup) {
  const [selectedRadioButton, setSelectedRadioButton] = useState<string>('')

  const sizeField = cn({
    'form-field--small': size === 'small',
  })

  const onChangeClick = (checked, value) => {
    onHandleChange && onHandleChange(checked, value)
    if (checked) setSelectedRadioButton(value)
  }

  return (
    <div className={`form-field ${sizeField ? sizeField : ''}`}>
      {label && (
        <p className="form-field__label-text">
          {label}
          {required === true ? '*' : ''}
          <span></span>
        </p>
      )}
      <div className="form-field__radio-group">
        {items &&
          items.length &&
          items.map((item) => (
            <Radio
              key={item.id}
              {...item}
              checked={selectedRadioButton === item.value}
              onHandleChange={onChangeClick}
            />
          ))}
      </div>
    </div>
  )
}

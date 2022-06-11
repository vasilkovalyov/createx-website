import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import { ITextArea } from '../../../../interfaces/form'

export default function TextArea({ id, label, name, placeholder, required = false, value, cols = 30, rows = 2, size, onHandleChange }: ITextArea) {
    const [inputValue, setInputValue] = useState<string>('')

    const sizeField = cn({
		'form-field--small': size === 'small',
	})

	useEffect(() => {
        if (value) {
            setInputValue(value)
            onHandleChange && onHandleChange(value)
        }
	}, [value])

  return (
    <div className={`form-field ${sizeField}`}>
        <label className="form-field__label">
            { label && <p className="form-field__label-text">{label}{required === true ? '*' : ''}<span></span></p> }
            <textarea 
                id={id}
                name={name} 
                placeholder={placeholder}
                value={inputValue}
                className="form-field__textarea"
                cols={cols}
                rows={rows}
                onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
        </label>
    </div>
  )
}


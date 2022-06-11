import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import { IInput } from '../../../../interfaces/form'

export default function Input({ id, type = 'text', label, name, placeholder, required = false, value, size, onHandleChange }: IInput) {
	const [inputValue, setInputValue] = useState<string | number>('')

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
					<input
						id={id}
						type={type}
						className="form-field__input"
						name={name}
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
			</label>
    </div>
  )
}


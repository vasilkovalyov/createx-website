import React, { useState, useEffect } from 'react'

import { ISelect } from '../../../../interfaces/form'

export default function Select({ id, label, name, placeholder, required = false, value, options, onHandleChange }: ISelect) {
	const [inputValue, setInputValue] = useState<string>()

	useEffect(() => {
		if (options && options.length) {
			setInputValue(options[0].value)
		}
		// onHandleChange && onHandleChange(value)
	}, [value])

  return (
    <div className="form-field">
			<label className="form-field__label">
					{ label && <p className="form-field__label-text">{label}{required === true ? '*' : ''}<span></span></p> }
					<select
						id={id}
						className="form-field__select"
						name={name}
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					>
						<option value=''>Select</option>
						{
							options && options.length && options.map((item) => <option key={item.value} value={item.value}>{item.name}</option> )
						}
					</select>
			</label>
    </div>
  )
}

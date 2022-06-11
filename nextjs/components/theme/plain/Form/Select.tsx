import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import { ISelect } from '../../../../interfaces/form'

export default function Select({ id, label, name, placeholder, required = false, value, options, size, onHandleChange }: ISelect) {
	const [inputValue, setInputValue] = useState<string>('')

	const sizeField = cn({
		'form-field--small': size === 'small',
	})

	// useEffect(() => {
	// 	onHandleChange && onHandleChange(inputValue)
	// }, [inputValue])

	const onHandleClick = (value: string) => {
		setInputValue(value)
		onHandleChange && onHandleChange(value)
	}

	return (
		<div className={`form-field ${sizeField}`}>
			<label className="form-field__label">
					{ label && <p className="form-field__label-text">{label}{required === true ? '*' : ''}<span></span></p> }
					<select
						id={id}
						className="form-field__select"
						name={name}
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => onHandleClick(e.target.value)}
					>
						<option value='' disabled>{placeholder || 'Select'}</option>
						{
							options && options.length && options.map((item, index) => <option key={index} value={item.name}>{item.name}</option> )
						}
					</select>
			</label>
		</div>
	)
}

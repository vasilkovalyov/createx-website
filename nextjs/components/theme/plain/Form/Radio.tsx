import React, { useState, useEffect } from 'react'

import { IRadio } from '../../../../interfaces/form'

export default function Radio({ id, label, name, required = false, value, checked = false, onHandleChange }: IRadio) {
	const [inputValue, setInputValue] = useState<boolean>(checked)

	useEffect(() => {
		if (checked !== undefined) {
			onHandleChange && onHandleChange(checked, value)
			setInputValue(checked)
		}
	}, [checked])

	const onHandleClick = (checked) => {
		onHandleChange && onHandleChange(checked, value)
		setInputValue(checked)
	}

  return (
    <div className={`form-field-radio ${inputValue === true ? 'form-field-radio--checked' : '' }`}>
		<label className="form-field-radio__label">
			<input
				id={id}
				type="radio"
				className="form-field-radio__radio"
				name={name}
				value={value}
				checked={inputValue}
				onChange={(e) => onHandleClick(e.target.checked)}
			/>
			<span className="form-field-radio__radio-marker"></span>
			{ label && <p className="form-field-radio__label-text">{label}{required === true ? '*' : ''}<span></span></p> }
		</label>
    </div>
  )
}


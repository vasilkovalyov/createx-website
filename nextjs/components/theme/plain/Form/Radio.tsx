import React, { useState, useEffect } from 'react'

import { IRadio } from '../../../../interfaces/form'

export default function Radio({ id, label, name, required = false, value, checked = false, onHandleChange }: IRadio) {
	const [inputValue, setInputValue] = useState<boolean>(checked)

	useEffect(() => {
		if (inputValue !== undefined) {
			onHandleChange && onHandleChange(inputValue)
			setInputValue(inputValue)
		}
	}, [inputValue])

	const onHandleClick = (e) => {
		onHandleChange && onHandleChange(e)
		setInputValue(e.target.checked)
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
				onChange={(e) => onHandleClick(e)}
			/>
			<span className="form-field-radio__radio-marker"></span>
			{ label && <p className="form-field-radio__label-text text-xs">{label}{required === true ? '*' : ''}<span></span></p> }
		</label>
    </div>
  )
}


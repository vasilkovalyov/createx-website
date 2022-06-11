import React, { useState, useEffect } from 'react'

import { IRadio } from '../../../../interfaces/form'

export default function Radio({ id, label, name, required = false, value, checked, onHandleChange }: IRadio) {
	const [inputValue, setInputValue] = useState<boolean>(checked || false)


	useEffect(() => {
		if (checked !== undefined) {
			onHandleChange && onHandleChange(checked)
			setInputValue(checked)
		}
	}, [checked])

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
					onChange={(e) => setInputValue(e.target.checked)}
				/>
				<span className="form-field-radio__radio-marker"></span>
				{ label && <p className="form-field-radio__label-text text-xs">{label}{required === true ? '*' : ''}<span></span></p> }
			</label>
    </div>
  )
}


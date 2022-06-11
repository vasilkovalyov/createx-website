import React, { useState, useEffect } from 'react'

import { ICheckbox } from '../../../../interfaces/form'

export default function Checkbox({ id, label, name, required = false, value, checked, onHandleChange }: ICheckbox) {
	const [inputValue, setInputValue] = useState<boolean>(checked || false)

	useEffect(() => {
		if (checked !== undefined) {
			onHandleChange && onHandleChange(checked)
			setInputValue(checked)
		}
	}, [checked])

  return (
    <div className={`form-field-checkbox ${inputValue === true ? 'form-field-checkbox--checked' : '' }`}>
			<label className="form-field-checkbox__label">
				<input
					id={id}
					type="checkbox"
					className="form-field-checkbox__checkbox"
					name={name}
					value={value}
					checked={inputValue}
					onChange={(e) => setInputValue(e.target.checked)}
				/>
				<span className="form-field-checkbox__checkbox-marker"></span>
				{ label && <p className="form-field-checkbox__label-text text-xs">{label}{required === true ? '*' : ''}<span></span></p> }
			</label>
    </div>
  )
}


import React, { useState } from 'react'

import Radio from './Radio'
import { IRadio } from '../../../../interfaces/form'

export default function RadioGroup({ items, onChange }: { items: IRadio[], onChange: (checked: boolean, name?: string) => void }) {
    const [selectedRadioButton, setSelectedRadioButton] = useState<string>('')
    const isRadioSelected = (value: string): boolean => selectedRadioButton === value

    const onChangeClick = (e) => {
        // onChange && onChange(target)
        // if (e.target) {
        //     console.log('checked', e.target?.checked)
        //     console.log('value', e.target?.value)
        // }
        // console.log('e.currentTarget.value', e.currentTarget)
        // setSelectedRadioButton(e.currentTarget.value)
    }

    return (
        <div>
            {
                items && items.length && items.map((item) => (
                    <div key={item.id}>
                        <Radio {...item} checked={isRadioSelected(item.value)} onHandleChange={onChangeClick}  />
                    </div>
                ))
            }
        </div>
    )
}


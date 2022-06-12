import { InputType, Identificator, SizeFormField } from '../types/common'

export interface IFormField {
    id?: Identificator
    label?: string
    name: string
    placeholder?: string
    required?: boolean
    size?: SizeFormField
}

export interface IInput extends IFormField {
    type?: InputType
    value?: string | number
    onHandleChange?: (value: string | number) => void
}

export interface ITextArea extends IFormField {
    value?: string
    cols?: number
    rows?: number
    onHandleChange?: (value: string) => void
}

export interface ISelectOption {
    value: string
    name: string
}

export interface ISelect extends IFormField {
    value?: string
    onHandleChange?: (value: string) => void
    options: ISelectOption[]
}

export interface ICheckbox extends Omit<IFormField, 'placeholder' | 'size'> {
    value: string
    checked?: boolean
    onHandleChange?: (e: any) => void
}

export interface IRadio extends Omit<IFormField, 'placeholder' | 'size'> {
    value: string
    checked?: boolean
    onHandleChange?: (e: any, value: string) => void
}

export interface IRadioGroup extends Pick<IFormField, 'label' | 'size' | 'required'>{
    items: IRadio[],
    onHandleChange?: (checked: boolean, value?: string) => void
}
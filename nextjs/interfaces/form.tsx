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
    onHandleChange?: (value: string | number) => string | number
}

export interface ITextArea extends IFormField {
    value?: string
    cols?: number
    rows?: number
    onHandleChange?: (value: string) => string
}

export interface ISelectOption {
    value: string
    name: string
}

export interface ISelect extends Pick<IFormField, 'size'> {
    options: ISelectOption[]
}

export interface ICheckbox extends Omit<IFormField, 'placeholder'> {
    value?: string
    checked?: boolean
    onHandleChange?: (value: boolean) => boolean
}

export interface IRadio extends Omit<IFormField, 'placeholder'> {
    value?: string
    checked?: boolean
    onHandleChange?: (value: boolean) => boolean
}
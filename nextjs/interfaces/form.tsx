import { InputType, Identificator, SizeFormField } from '../types/common'

export interface IInput {
    id?: Identificator
    type?: InputType
    label?: string
    name: string
    placeholder?: string
    size?: SizeFormField
    required?: boolean
    value?: string | number
    onHandleChange?: (value: string | number) => string | number
}


export interface ITextArea extends Omit<IInput, 'type'> {
    value?: string
    cols?: number
    rows?: number
    size?: SizeFormField
    onHandleChange?: (value: string) => string
}

export interface ISelectOption {
    value: string
    name: string
}

export interface ISelect extends Omit<ITextArea, 'type'> {
    size?: SizeFormField
    options: ISelectOption[]
}

export interface ICheckbox {
    id?: Identificator
    label?: string
    name: string
    required?: boolean
    value?: string | number
    checked?: boolean
    onHandleChange?: (value: boolean) => boolean
}
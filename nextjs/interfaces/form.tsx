import { InputType, Identificator } from '../types/common'

export interface IInput {
    id?: Identificator
    type?: InputType
    label?: string
    name: string
    placeholder?: string
    required?: boolean
    value?: string | number
    onHandleChange?: (value: string | number) => string | number
}


export interface ITextArea extends Omit<IInput, 'type'> {
    value?: string
    cols?: number
    rows?: number
    onHandleChange?: (value: string) => string
}

export interface ISelect extends Omit<ITextArea, 'type'> {
    options: {
        value: string
        name: string
    }[]
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
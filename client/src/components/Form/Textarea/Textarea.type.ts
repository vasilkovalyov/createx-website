import { TextareaHTMLAttributes } from 'react'

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  name?: string
}

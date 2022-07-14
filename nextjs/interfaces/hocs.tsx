import { ComponentType } from 'react-markdown/lib/ast-to-react'

export interface ILocationsSelect<T> {
  Component: ComponentType<T>
  onChange?: (value) => void
  rest: T
}

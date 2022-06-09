import React from 'react'
import { IPageField } from '../interfaces/fields'

export const PageProvider = React.createContext<IPageField | null>(null)

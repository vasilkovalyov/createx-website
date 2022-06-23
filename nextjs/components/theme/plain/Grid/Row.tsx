import React from 'react'
import { IRow } from '../../../../interfaces/common'

export default function Row({ className, children, alignItems, justify }: IRow) {
  const mediaClasses = (justify ? `${justify}` : '') + (alignItems ? ` ${['align-' + alignItems]}` : '')
  return <div className={`row ${mediaClasses} ${className ? className : ''}`}>{children}</div>
}

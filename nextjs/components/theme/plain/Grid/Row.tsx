import React from 'react'
import cn from 'classnames'
import { IRow } from '../../../../interfaces/common'

export default function Row({ className, children, alignItems, justify }: IRow) {
  const mediaClasses = (justify ? `${justify}` : '') + (alignItems ? ` ${['align-' + alignItems]}` : '')
  return <div className={cn('row', mediaClasses, className)}>{children}</div>
}

import React from 'react'
import cn from 'classnames'

import { IIcomoonIcon } from './IcomoonIcon.type'

function IcoMoonIcon({ className, icon }: IIcomoonIcon) {
  return (
    <span className={cn('icomoon-icon', className)}>
      <span className={icon}></span>
    </span>
  )
}

export default IcoMoonIcon

import React from 'react'
import cn from 'classnames'

import { IIcomoonIcon } from './IcomoonIcon.type'

function IcoMoonIcon({ className, icon }: IIcomoonIcon) {
  return (
    <div className={cn('icomoon-icon', className)}>
      <span className={icon}></span>
    </div>
  )
}

export default IcoMoonIcon

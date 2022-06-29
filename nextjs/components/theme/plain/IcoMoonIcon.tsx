import React from 'react'
import cn from 'classnames'

import { IIcon } from '../../../interfaces/common'

function IcoMoonIcon({ className, icon }: IIcon) {
  return (
    <div className={cn('icomoon-icon', className)}>
      <span className={icon}></span>
    </div>
  )
}

export default IcoMoonIcon

import React from 'react'

import { IIcon } from '../../../interfaces/common'

function IcoMoonIcon({ className, icon }: IIcon) {
  return (
    <div className={`icomoon-icon ${className ? className : ''}`}>
      <span className={icon}></span>
    </div>
  )
}

export default IcoMoonIcon

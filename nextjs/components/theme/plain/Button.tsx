import React from 'react'
import LinkComponent from 'next/link'
import cn from 'classnames'

import { IButton } from '../../../interfaces/common'

function Button({ url, className, type, name, size, fullwidth, color, uppercase = true, onClick }: IButton) {
  const sizeField = cn({
    'btn--small': size === 'small',
    'btn--extra-small': size === 'extra-small',
    'btn--fullwidth': fullwidth === true,
  })

  const colorButton = cn({
    'btn--primary': color === 'primary',
    'btn--white': color === 'white',
  })

  const typeButton = cn({
    'btn--outline': type === 'outline',
    'btn--transparent': type === 'transparent',
  })

  const uppercaseBtn = cn({
    'text-uppercase': uppercase === true,
  })

  if (url) {
    return (
      <LinkComponent href={`/en/${url}`}>
        <a className={cn('btn', colorButton, typeButton, sizeField, uppercaseBtn, className)}>{name && name}</a>
      </LinkComponent>
    )
  }

  return (
    <button className={cn('btn', typeButton, sizeField, uppercaseBtn, className)} onClick={() => onClick}>
      {name}
    </button>
  )
}

export default Button

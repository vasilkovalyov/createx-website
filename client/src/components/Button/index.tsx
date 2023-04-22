import React from 'react'
import LinkComponent from 'next/link'
import cn from 'classnames'

import { IButton } from './Button.type'

function Button({ href, className, fill, size, fullwidth, color, children, ...rest }: IButton) {
  const sizeField = cn({
    'btn--small': size === 'small',
    'btn--fullwidth': fullwidth === true,
  })

  const colorButton = cn({
    'btn--primary': color === 'primary',
    'btn--white': color === 'white',
  })

  const fillButton = cn({
    'btn--outline': fill === 'outline',
    'btn--transparent': fill === 'transparent',
  })

  const buttonClassName = cn('btn', colorButton, fillButton, sizeField, className)

  if (href) {
    return (
      <LinkComponent href={href} className={buttonClassName} {...rest}>
        {children}
      </LinkComponent>
    )
  }

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  )
}

export default Button

import React from 'react'
import LinkComponent from 'next/link'
import cn from 'classnames'

import { IButton } from '../../../interfaces/common'

function Button({ url, className, outline, name, size, fullwidth, color, onClick }: IButton) {
  const sizeField = cn({
    'btn--small': size === 'small',
    'btn--extra-small': size === 'extra-small',
    'btn--fullwidth': fullwidth === true,
  })

  const colorButton = cn({
    'btn--primary': color === 'primary',
    'btn--white': color === 'white',
  })

  const classNameProp = className ? className : ''
  const outlineProp = outline ? 'btn--outline' : ''
  if (url) {
    return (
      <LinkComponent href={`/en/${url}`}>
        <a className={`btn ${colorButton} ${outlineProp} ${sizeField} ${classNameProp}`}>{name && name}</a>
      </LinkComponent>
    )
  }

  return (
    <button className={`btn ${outlineProp} ${classNameProp} ${sizeField}`} onClick={() => onClick}>
      {name}
    </button>
  )
}

export default Button

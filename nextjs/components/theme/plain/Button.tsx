import React from 'react'
import LinkComponent from 'next/link'
import cn from 'classnames'

import { IButton } from '../../../interfaces/common'

function Button({ url, className, outline, name, size, fullwidth, onClick }: IButton) {
  const sizeField = cn({
		'btn--small': size === 'small',
    'btn--fullwidth': fullwidth === true
	})

    const classNameProp = className ? className : ''
    const outlineProp = outline ? 'btn--outline' : ''
    if (url) {
        return (
            <LinkComponent href={url}>
                <a className={`btn ${classNameProp} ${outlineProp} ${sizeField}`}>{name && name}</a>
            </LinkComponent>
        )
    }
  return (
    <button className={`btn ${outlineProp} ${classNameProp} ${sizeField}`} onClick={() => onClick}>{name}</button>
  )
}

export default Button

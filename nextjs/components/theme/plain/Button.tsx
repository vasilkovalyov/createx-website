import React from 'react'
import LinkComponent from 'next/link'

import { IButton } from '../../../interfaces/common'

function Button({ url, className, outline, name, onClick }: IButton) {
    const classNameProp = className ? className : ''
    const outlineProp = outline ? 'btn--outline' : ''
    if (url) {
        return (
            <LinkComponent href={url}>
                <a className={`btn ${classNameProp} ${outlineProp}`}>{name && name}</a>
            </LinkComponent>
        )
    }
  return (
    <button className={`btn ${outlineProp} ${classNameProp}`} onClick={() => onClick}>{name}</button>
  )
}

export default Button

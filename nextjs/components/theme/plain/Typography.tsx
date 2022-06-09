import React from 'react'
import { ITypography } from '../../../interfaces/common'

export default function Typography({ level, className, text }: ITypography) {
  if (level) {
    const Component = level
    return (
      <Component
        className={`heading ${className ? className : ''}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></Component>
    )
  } else {
    return <p className={`text ${className ? className : ''}`}>{text}</p>
  }
}

import React from 'react'
import cn from 'classnames'

import { ITypography } from '../../../interfaces/common'

export default function Typography({ level, className, text, aligned }: ITypography) {
  const alignedContent = cn({
		'text-align--center': aligned === 'center',
		'text-align--right': aligned === 'right',
	})

  if (level) {
    const Component = level
    return (
      <Component
        className={`heading ${className ? className : ''} ${alignedContent}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></Component>
    )
  } else {
    return <p className={`text ${className ? className : ''} ${alignedContent}`}>{text}</p>
  }
}

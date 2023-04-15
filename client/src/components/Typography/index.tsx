import React from 'react'
import cn from 'classnames'

import { ITypography } from './Typography.type'

export default function TypographyMemo({ level, className, text }: ITypography) {
  if (level) {
    const Component = level
    return <Component className={cn('heading', className)} dangerouslySetInnerHTML={{ __html: text }}></Component>
  } else {
    return <p className={cn('text', className)}>{text}</p>
  }
}

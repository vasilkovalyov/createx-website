import React from 'react'
import cn from 'classnames'

import { ITypography } from './Typography.type'

export default function TypographyMemo({ level, className, children }: ITypography) {
  if (level) {
    const Component = level
    return <Component className={cn('heading', className)}>{children}</Component>
  } else {
    return <p className={cn('text', className)}>{children}</p>
  }
}

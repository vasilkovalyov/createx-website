import React from 'react'
import cn from 'classnames'

import { ContainerWidthType } from '../../../types/common'

interface IContainer {
  children: React.ReactNode
  className?: string
  containerWidth?: ContainerWidthType
}

function Container({ children, className, containerWidth }: IContainer) {
  const containerWidthVariant = cn({
    'container--medium': containerWidth === 'medium',
    'container--large': containerWidth === 'large',
  })

  return <div className={cn('container', containerWidthVariant, className)}>{children}</div>
}

export default Container

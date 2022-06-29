import React from 'react'
import cn from 'classnames'

import { ICol } from '../../../../interfaces/common'

export default function Col({ className, children, base, sm, md, lg, xl }: ICol) {
  const mediaClasses =
    (base ? ` ${['base-' + base]}` : '') +
    (sm ? ` ${['sm-' + sm]}` : '') +
    (md ? ` ${['md-' + md]}` : '') +
    (lg ? ` ${['lg-' + lg]}` : '') +
    (xl ? ` ${['xl-' + xl]}` : '')
  return <div className={cn('col', mediaClasses, className)}>{children}</div>
}

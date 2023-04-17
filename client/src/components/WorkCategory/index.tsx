import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Typography from '../Typography'

import { IWorkCategory } from './WorkCategory.type'

function WorkCategory({ logo, logo2, category, className, onClick }: IWorkCategory) {
  return (
    <div className={cn('work-category', className)} onClick={onClick}>
      <div className="work-category__image relative mb-18">
        {logo ? <Image {...logo} className="work-category__logo work-category__logo-1" /> : null}
        {logo2 ? <Image {...logo2} className="work-category__logo work-category__logo-2" /> : null}
      </div>
      <Typography className="work-category__category">{category}</Typography>
    </div>
  )
}

export default WorkCategory

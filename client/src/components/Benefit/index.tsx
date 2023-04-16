import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Typography from '../Typography'
import { IBenefit } from './Benefit.type'

function Benefit({ heading, image, text, className }: IBenefit) {
  return (
    <div className={cn('benefit text-center', className)}>
      {image ? <Image {...image} className="mx-auto mb-24" /> : null}
      {heading ? (
        <Typography level="h6" className="mb-8">
          {heading}
        </Typography>
      ) : null}
      {text ? <Typography className="text-gray-600">{text}</Typography> : null}
    </div>
  )
}

export default Benefit

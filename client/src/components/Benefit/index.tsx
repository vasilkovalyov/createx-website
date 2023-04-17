import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Typography from '../Typography'
import { IBenefit } from './Benefit.type'

function Benefit({ heading, image, text, theme, className }: IBenefit) {
  return (
    <div className={cn('benefit text-center', { 'benefit--dark': theme === 'dark' }, className)}>
      {image ? <Image {...image} className="mx-auto mb-24" /> : null}
      {heading ? (
        <Typography level="h6" className="benefit__heading mb-8">
          {heading}
        </Typography>
      ) : null}
      {text ? <Typography className="benefit__text">{text}</Typography> : null}
    </div>
  )
}

export default Benefit

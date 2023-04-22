import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Typography from '../../components/Typography'

import { IBlockHero } from './BlockHero.type'

function BlockHero({ heading, image, text, children, className }: IBlockHero) {
  return (
    <div className={cn('block-hero relative', className)}>
      {image ? (
        <div className="block-hero__bg-image fill-absolute">
          <Image {...image} className="object-cover" fill />
        </div>
      ) : null}
      <div className="container">
        <div className="block-hero__body relative">
          {children}
          <Typography level="h1" className="mb-24 uppercase">
            {heading}
          </Typography>
          {text ? <Typography className="text-gray-600 text-xl">{text}</Typography> : null}
        </div>
      </div>
    </div>
  )
}

export default BlockHero

import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Button from '../Button'
import Typography from '../Typography'

import { IService } from './Service.type'

function Service({ heading, image, text, className, href, linkText = 'Learn more', reversed = false }: IService) {
  return (
    <div
      className={cn(
        'service sm:flex sm:items-start md:items-center',
        { 'service--reversed sm:flex-row-reverse': reversed === true },
        className,
      )}
    >
      {image ? (
        <div className="service__image relative mb-24">
          <Image src={image.src} alt={image.alt} className="object-cover" fill />
        </div>
      ) : null}
      <div className="service__body">
        <Typography level="h3" className="mb-24">
          {heading}
        </Typography>
        {text ? <Typography className="text-gray-700 mb-20 md:mb-48">{text}</Typography> : null}
        <Button href={href} fill="outline" color="primary" size="small">
          {linkText}
        </Button>
      </div>
    </div>
  )
}

export default Service

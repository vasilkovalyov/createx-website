import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import Typography from '../Typography'
import { IServicePreview } from './ServicePreview.type'

function ServicePreview({ heading, href, image, logo, logo2, className }: IServicePreview) {
  const logoSize = 40
  return (
    <div className={cn('service-preview', className)}>
      {href ? (
        <Link href={href} className="service-preview__link">
          <Typography level="span" className="hidden">
            {heading} link
          </Typography>
        </Link>
      ) : null}
      <div className="service-preview__overlay overlay">
        {image ? <Image src={image.src} alt={image.alt} className="mx-auto mb-24 object-cover" fill /> : null}
      </div>
      <div className="service-preview__body">
        <div className="service-preview__logo-wrapper relative mb-24">
          {logo ? (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || logoSize}
              height={logo.height || logoSize}
              className="service-preview__logo service-preview__logo-1"
            />
          ) : null}
          {logo2 ? (
            <Image
              src={logo2.src}
              alt={logo2.alt}
              width={logo2.width || logoSize}
              height={logo2.height || logoSize}
              className="service-preview__logo service-preview__logo-2 opacity-0 invisible"
            />
          ) : null}
        </div>
        {heading ? (
          <Typography level="h6" className="service-preview__heading mb-8">
            {heading}
          </Typography>
        ) : null}
      </div>
    </div>
  )
}

export default ServicePreview

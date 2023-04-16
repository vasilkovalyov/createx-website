import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Button from '../Button'
import Typography from '../Typography'

import { IProductPreview } from './ProductPreview.type'

function ProductPreview({ heading, image, category, href, linkText = 'View Project', className }: IProductPreview) {
  return (
    <div className={cn('product-preview shadow-md relative overflow-hidden rounded-sm', className)}>
      <div className="product-preview__image fill-absolute">{image ? <Image {...image} fill /> : null}</div>
      <div className="product-preview__body pt-16 pb-24 px-20 bg-white text-center absolute bottom-0 left-0 right-0">
        <Typography level="h6" className="mb-4">
          {heading}
        </Typography>
        <Typography className="text-gray-700 text-sm mb-24">{category}</Typography>
        <Button href={href} fill="outline" color="primary" size="small">
          {linkText}
        </Button>
      </div>
    </div>
  )
}

export default ProductPreview

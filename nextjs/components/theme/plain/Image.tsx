import React from 'react'
import cn from 'classnames'
import { IImage } from '../../../interfaces/common'
import { getImageBasePath } from '../../../utilities/common'

export default function Image({ Url, Alt, className, width = 'auto', height = 'auto' }: IImage) {
  return (
    <div className={cn('image-block', className)}>
      <img
        src={getImageBasePath(Url)}
        alt={Alt || 'image description'}
        className="image-block__image "
        width={width}
        height={height}
      />
    </div>
  )
}

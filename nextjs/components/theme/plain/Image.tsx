import React from 'react'
import cn from 'classnames'
import { IImage } from '../../../interfaces/common'
import { usePage } from '../../../context/project'

export default function Image({ Url, Alt, className, width = 'auto', height = 'auto' }: IImage) {
  const [page] = usePage()

  const devPath = page?.NODE_ENV === 'development' ? 'http://localhost:1337' : ''
  // const devPath = ''
  return (
    <div className={cn('image-block', className)}>
      <img
        src={`${devPath}${Url}`}
        alt={Alt || 'image description'}
        className="image-block__image "
        width={width}
        height={height}
      />
    </div>
  )
}

import React from 'react'
import { IImage } from '../../../interfaces/common'
import { usePage } from '../../../context/project'

export default function Image({ Url, Alt, className }: IImage) {
  const [page] = usePage()

  const devPath = page?.NODE_ENV === 'development' ? 'http://localhost:1337' : ''
  // const devPath = ''
  return (
    <div className={`image-block ${className ? className : ''}`}>
      <img src={`${devPath}${Url}`} alt={Alt && 'image description'} className="image-block__image" />
    </div>
  )
}

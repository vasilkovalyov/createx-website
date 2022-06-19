import React, { useContext } from 'react'
import { IImage } from '../../../interfaces/common'
import { PageProvider } from '../../../context/project'

export default function Image({ Url, Alt, className }: IImage) {
  const ctx = useContext(PageProvider)

  const davPath = ctx?.NODE_ENV === 'development' ? 'http://localhost:1337' : ''
  return (
    <div className={`image-block ${className ? className : ''}`}>
      <img src={`${davPath}${Url}`} alt={Alt && 'image description'} className="image-block__image" />
    </div>
  )
}

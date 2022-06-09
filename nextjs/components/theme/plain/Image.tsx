import React from 'react'
import { IImage } from '../../../interfaces/common'

export default function Image({ Url, Alt, className }: IImage) {
  return (
    <div className={`image-block ${className ? className : ''}`}>
      {/* http://localhost:1337 */}
      <img src={Url} alt={Alt && 'image description'} className="image-block__image" />
    </div>
  )
}

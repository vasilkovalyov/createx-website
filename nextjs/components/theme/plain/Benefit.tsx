import React from 'react'

import ImageComponent from '../plain/Image'
import Typography from '../plain/Typography'

import { IBenefit } from '../../../interfaces/common'

function Benefit({ Image, Text, Title, className }: IBenefit) {
  return (
    <div className={`benefit ${className ? className : ''}`}>
      {Image && Image.Url && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="benefit__logo" />}
      <Typography level="h6" text={Title} className="benefit__title" />
      {Text && <Typography text={Text} className="benefit__text" />}
    </div>
  )
}

export default Benefit

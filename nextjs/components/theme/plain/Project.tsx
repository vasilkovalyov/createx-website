import React from 'react'
import Link from 'next/link'

import Image from './Image'
import Typography from './Typography'

import { IProject } from '../../../interfaces/common'
import { HeadingLevel } from '../../../enums/common'

export default function Project({ id, image, heading, category, link }: IProject) {
  return (
    <div className="project">
      <div className="project__overlay image-absolute-overlay"></div>
      <Link href={link.url}>
        <a className="project__link"></a>
      </Link>
      {image && image.url ? <Image className="project__image" image={image} /> : null}
      <div className="project__body">
        <Typography text={heading} level={HeadingLevel.H3} className="project__heading" />
        <Typography text={category} className="project__category" />
      </div>
    </div>
  )
}

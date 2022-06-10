import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'
import SocialList from './SocialList'

import { IPerson } from '../../../interfaces/common'
import { HeadingLevel } from '../../../enums/common'

export default function PersonCard({ Image, Title, Description, Socials }: IPerson) {
  return (
    <div className="person-card">
        <div className="person-card__image-wrapper">
            <ImageComponent Url={Image.Url} Alt={Image.Alt} className="person-card__image" />
            <SocialList Items={Socials.Items} size={'small'} className="person-card__social-list" />
        </div>
      <div className="person-card__body text-align--center">
        <Typography level={HeadingLevel.H6} text={Title} className="person-card__title" />
        <Typography text={Description} className="person-card__description text-color-secondary" />
      </div>
    </div>
  )
}

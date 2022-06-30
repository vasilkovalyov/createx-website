import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'
import SocialList from './SocialList'

import { IPerson } from '../../../interfaces/common'

export default function PersonCard({ Image, Title, Text, Socials }: IPerson) {
  console.log('Socials', Socials)
  return (
    <div className="person-card">
      <div className="person-card__image-wrapper">
        {Image && Image.Url ? <ImageComponent Url={Image.Url} Alt={Image.Alt} className="person-card__image" /> : null}
        {Socials && Socials.length ? (
          <SocialList Items={Socials} size={'small'} className="person-card__social-list" />
        ) : null}
      </div>
      <div className="person-card__body">
        <Typography level="h6" text={Title} className="person-card__title" aligned="center" />
        <Typography text={Text} className="person-card__description text-color-secondary" aligned="center" />
      </div>
    </div>
  )
}

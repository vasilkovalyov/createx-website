import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'
import Button from './Button'

import { IProject } from '../../../interfaces/common'

export default function ProjectCard({ Image, Title, Text, Link, category }: IProject) {
  return (
    <div className="project-card shadow-wrapper">
      {Image && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="project-card__image" />}
      <div className="project-card__body text-align--center">
        <Typography level="h6" text={Title} className="project-card__title" />
        <Typography text={Text} className="project-card__description text-xs text-color-secondary" />
        <Button name="View project" url={Link?.url} type="outline" className="project-card__btn" />
      </div>
    </div>
  )
}

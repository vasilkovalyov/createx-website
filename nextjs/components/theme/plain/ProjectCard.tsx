import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'
import Button from './Button'

import { IProject } from '../../../interfaces/common'

export default function ProjectCard({ Image, Title, Description, Link }: IProject) {
  return (
    <div className="project-card shadow-wrapper">
      <ImageComponent Url={Image.Url} Alt={Image.Alt} className="project-card__image" />
      <div className="project-card__body">
        <div className="project-card__heading">
          <Typography level="h6" text={Title} className="project-card__title" aligned="center" />
          <Typography text={Description} className="project-card__description text-xs text-color-secondary" aligned="center" />
        </div>
        <Button name="View project" url={Link?.url} outline={true} className="project-card__btn" />
      </div>
    </div>
  )
}

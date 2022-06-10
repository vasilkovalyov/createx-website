import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'
import Button from './Button'

import { IProject } from '../../../interfaces/common'
import { HeadingLevel } from '../../../enums/common'

export default function ProjectCard({ Image, Title, Description, Link }: IProject) {
  return (
    <div className="project-card">
      <ImageComponent Url={Image.Url} Alt={Image.Alt} className="project-card__image" />
      <div className="project-card__body text-align--center">
        <div className="project-card__heading">
          <Typography level={HeadingLevel.H6} text={Title} className="project-card__title" />
          <Typography text={Description} className="text-xs text-color-secondary" />
        </div>
        <Button name="View project" url={Link?.url} outline={true} className="project-card__btn" />
      </div>
    </div>
  )
}

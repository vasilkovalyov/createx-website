import React from 'react'

import Typography from './Typography'

import { IProjectDescription } from '../../../interfaces/common'

export default function ProjectDescription({ Items }: IProjectDescription) {
  return (
    <div className="project-description shadow-wrapper">
        {
            Items && Items.length ? (
                <>
                    {
                        Items.map((item) => (
                            <div key={item.id} className="project-description__item">
                                <Typography text={item.Title} className="project-description__title text-uppercase font-bold" />
                                <Typography text={item.Text} className="project-description__text" />
                            </div>
                        ))
                    }
                </>
            ) : null
        }
    </div>
  )
}

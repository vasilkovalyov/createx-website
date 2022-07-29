import React, { useState } from 'react'
import cn from 'classnames'
import Image from './Image'
import Typography from './Typography'

import Row from './Grid/Row'
import Col from './Grid/Col'

import { IProjectCategoriesList } from '../../../interfaces/common'

export default function ProjectCategories({ Items, onClick }: IProjectCategoriesList) {
  const [activeCategory, setActiveCategory] = useState<string>('all-projects')
  function handleClick(value: string) {
    setActiveCategory(value)
    onClick && onClick(value)
  }

  return (
    <div className="project-categories">
      <Row justify="center">
        {Items && Items.length ? (
          <>
            {Items.map((item) => (
              <Col key={item.id} base={5} sm={5} md={4} className="project-categories__col">
                <div
                  className={cn('project-category bg-color-white shadow-wrapper', {
                    active: activeCategory === item.Name,
                  })}
                  onClick={(e) => handleClick(item.Name)}
                >
                  <div className="project-category__logo-wrapper">
                    {item.Image && (
                      <Image
                        Url={item.Image?.Url}
                        Alt={item.Image?.Alt}
                        className="project-category__logo project-category__logo-primary"
                      />
                    )}
                    {item.Image2 && (
                      <Image
                        Url={item.Image2?.Url}
                        Alt={item.Image2?.Alt}
                        className="project-category__logo project-category__logo-secondary"
                      />
                    )}
                  </div>
                  <div className="project-category__body text-align--center">
                    <Typography text={item.Title} className="project-category__title color-grey-dark" />
                  </div>
                </div>
              </Col>
            ))}
          </>
        ) : null}
      </Row>
    </div>
  )
}

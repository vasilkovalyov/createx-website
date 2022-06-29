import React from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import ProjectCard from './ProjectCard'
import ProjectCategories from './ProjectCategories'

import { IBlockOurProjects } from '../../../interfaces/blocks'

export default function BlockOurProject({ Categories, Items }: IBlockOurProjects) {
  function onClick(value: string) {
    console.log(value)
  }

  return (
    <section className="block-our-projects">
      <Container className="block-our-projects__container">
        {Categories && Categories.length ? <ProjectCategories Items={Categories} onClick={onClick} /> : null}
        <div className="our-projects-list">
          <Row>
            {Items && Items.length ? (
              <>
                {Items.map((item) => (
                  <Col key={item.id} base={12} md={6} xl={4}>
                    <ProjectCard {...item} />
                  </Col>
                ))}
              </>
            ) : null}
          </Row>
        </div>
      </Container>
    </section>
  )
}

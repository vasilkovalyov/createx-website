import React from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import ProjectCard from './ProjectCard'
import WorkCategories from './WorkCategories'

import { IBlockOurWorks } from '../../../interfaces/blocks'

export default function BlockOurWorks({ Categories, Items }: IBlockOurWorks) {
  function onClick(value: string) {
    console.log(value)
  }

  return (
    <section className="block-our-works">
      <Container className="block-our-works__container">
        <WorkCategories Items={Categories} onClick={onClick} />
        <div className="our-work-list">
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

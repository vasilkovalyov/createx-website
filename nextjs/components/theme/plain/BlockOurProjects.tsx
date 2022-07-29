import React, { useState } from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import ProjectCard from './ProjectCard'
import ProjectCategories from './ProjectCategories'

import { IBlockOurProjects } from '../../../interfaces/blocks'
import { IProject } from 'interfaces/common'
import { getProjects } from 'libs/cms/projects-loader'
import { IProjectsPageFields } from 'interfaces/fields'

export default function BlockOurProject({ Categories, Items, meta }: IBlockOurProjects) {
  const [projects, setProjects] = useState<IProject[] | []>(Items)

  async function onClickCategories(category: string) {
    try {
      let data: IProjectsPageFields | null = null
      if (category !== 'all-projects') {
        data = await getProjects(0, null, category)
      } else {
        if (meta) {
          data = await getProjects(0, meta.pagination.pageSize)
        }
      }

      if (data && data.projects.data) {
        console.log(data.projects.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="block-our-projects">
      <Container className="block-our-projects__container">
        {Categories && Categories.length ? <ProjectCategories Items={Categories} onClick={onClickCategories} /> : null}
        <div className="our-projects-list">
          <Row>
            {projects && projects.length ? (
              <>
                {projects.map((item) => (
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

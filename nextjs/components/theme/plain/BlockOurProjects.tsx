import React, { useCallback, useState } from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import Button from './Button'
import ProjectCard from './ProjectCard'
import ProjectCategories from './ProjectCategories'

import { IBlockOurProjects } from '../../../interfaces/blocks'
import { IProject } from 'interfaces/common'
import { getProjects } from 'libs/cms/projects-loader'
import { IProjectsPageFields } from 'interfaces/fields'
import { getFormattedProjects } from 'utilities/blockData'

import useProjectLoadMore from 'components/hooks/useProjectLoadMore'

export default function BlockOurProject({ Categories, Items, meta }: IBlockOurProjects) {
  const [projects, isShowLoadMore, onClickLoadMore, onClickCategories] = useProjectLoadMore(Items, meta)
  // const [projects, setProjects] = useState<IProject[] | []>(Items)
  // const [startLoadProjects, setStartLoadProjects] = useState<number>(3)
  // const [isShowLoadMore, setIsShowLoadMore] = useState<boolean>(true)

  // async function onClickCategories(category: string) {
  //   try {
  //     let data: IProjectsPageFields | null = null
  //     if (category !== 'all-projects') {
  //       setIsShowLoadMore(false)
  //       data = await getProjects({
  //         start: 0,
  //         category,
  //       })
  //     } else {
  //       setIsShowLoadMore(true)
  //       if (meta) {
  //         data = await getProjects({
  //           start: 0,
  //           limit: meta.pagination.pageSize,
  //         })
  //       }
  //     }

  //     if (data && data.projects.data) {
  //       setProjects(getFormattedProjects(data.projects.data))
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // async function onLoadMore() {
  //   try {
  //     const data = await getProjects({
  //       start: startLoadProjects,
  //       limit: 3,
  //     })

  //     const { page, pageCount } = data.projects.meta.pagination
  //     setStartLoadProjects(startLoadProjects * page)
  //     if (data.projects.data.length) setProjects([...projects, ...getFormattedProjects(data.projects.data)])
  //     if (page === pageCount) {
  //       setIsShowLoadMore(false)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

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
          {projects.length && isShowLoadMore && <Button name="Load more" onClick={onClickLoadMore} />}
        </div>
      </Container>
    </section>
  )
}

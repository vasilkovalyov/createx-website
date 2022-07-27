import React from 'react'
import useNewsLoader from '../../hooks/useNewsPagination'

import Container from './Container'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'
import NewsPost from './NewsPost'
import NewsCategories from './NewsCategories'

import { IBlockNews } from '../../../interfaces/blocks'
import Pagination from './Loaders/Pagination'
import Typography from './Typography'

export default function BlockNews({ Title, Categories, Items, meta }: IBlockNews) {
  const [posts, isShowPagination, handleClickPagination, handleClickCategories] = useNewsLoader(Items, meta)

  return (
    <section className="block-news">
      <Container className="block-news__container">
        <BlockHeading Title={Title} aligned="center" />
        <NewsCategories Items={Categories} onClick={handleClickCategories} />
        {posts && posts.length ? (
          <Row>
            {posts.map((post) => (
              <Col key={post.id} base={12} md={6}>
                <NewsPost {...post} />
              </Col>
            ))}
          </Row>
        ) : (
          <Typography text="Post not a found" aligned="center" level="h3" />
        )}
        {meta && isShowPagination ? (
          <Pagination
            page={meta?.pagination.page}
            pageCount={meta?.pagination.pageCount}
            pageSize={meta?.pagination.pageSize}
            total={meta?.pagination.total}
            onClick={handleClickPagination}
          />
        ) : null}
      </Container>
    </section>
  )
}

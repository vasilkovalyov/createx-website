import React, { useEffect, useState, useCallback } from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'
import NewsPost from './NewsPost'
import NewsCategories from './NewsCategories'

import { IBlockNews } from '../../../interfaces/blocks'
import Pagination from './Loaders/Pagination'

import { getPosts } from '../../../libs/cms/posts-loader'
import { INewsPost } from 'interfaces/common'
import { getFormattedPosts } from 'utilities/blockData'
import Typography from './Typography'
import { IPostsPageFields } from 'interfaces/fields'

export default function BlockNews({ Title, Categories, Items, meta }: IBlockNews) {
  const [posts, setPosts] = useState<INewsPost[] | []>(Items)
  const [isShowPagination, setIsShowPagination] = useState<boolean>(true)

  async function handleClickPagination(currentPage, pagination) {
    const data = await getPosts(pagination.start, pagination.pageSize)
    if (data.posts.data && data.posts.data.length) setPosts(getFormattedPosts(data.posts.data))
  }

  async function handleClickCategories(value: string) {
    let category = ''
    let data: IPostsPageFields | null = null
    if (value !== 'all-news') {
      setIsShowPagination(false)
      category = value
      data = await getPosts(0, null, category)
    } else {
      if (meta) {
        data = await getPosts(0, meta.pagination.pageSize)
        setIsShowPagination(true)
      }
    }

    if (data && data.posts.data) setPosts(getFormattedPosts(data.posts.data))
  }

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

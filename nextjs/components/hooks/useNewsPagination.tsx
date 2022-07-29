import { IMeta } from 'interfaces/blocks'
import { INewsPost } from 'interfaces/common'
import { IPostsPageFields } from 'interfaces/fields'
import { getPosts } from 'libs/cms/posts-loader'
import { useCallback, useState } from 'react'
import { getFormattedPosts } from 'utilities/blockData'

export default function useNewsLoader(
  items: INewsPost[] | [],
  meta: IMeta,
): [INewsPost[], boolean, (pageNum: number, meta: IMeta) => void, (value: string) => void] {
  const [posts, setPosts] = useState<INewsPost[] | []>(items)
  const [isShowPagination, setIsShowPagination] = useState<boolean>(true)

  const onClickPagination = useCallback(async (currentPage, meta) => {
    try {
      const data = await getPosts({
        start: meta.pagination.start,
        limit: meta.pagination.pageSize,
      })
      if (data.posts.data && data.posts.data.length) setPosts(getFormattedPosts(data.posts.data))
    } catch (e) {
      console.log(e)
    }
  }, [])

  const onClickCategories = useCallback(async (category: string) => {
    try {
      let data: IPostsPageFields | null = null
      if (category !== 'all-news') {
        setIsShowPagination(false)
        data = await getPosts({
          start: 0,
          category,
        })
      } else {
        data = await getPosts({
          start: 0,
          limit: meta.pagination.pageSize,
        })
        setIsShowPagination(true)
      }

      if (data && data.posts.data) setPosts(getFormattedPosts(data.posts.data))
    } catch (e) {
      console.log(e)
    }
  }, [])

  return [posts, isShowPagination, onClickPagination, onClickCategories]
}

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
      const data = await getPosts(meta.pagination.start, meta.pagination.pageSize)
      if (data.posts.data && data.posts.data.length) setPosts(getFormattedPosts(data.posts.data))
    } catch (e) {
      console.log(e)
    }
  }, [])

  const onClickCategories = useCallback(async (value: string) => {
    try {
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
    } catch (e) {
      console.log(e)
    }
  }, [])

  return [posts, isShowPagination, onClickPagination, onClickCategories]
}

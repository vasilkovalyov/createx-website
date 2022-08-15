import { IMeta } from 'interfaces/blocks'
import { IProject } from 'interfaces/common'
import { IPostsPageFields, IProjectsPageFields } from 'interfaces/fields'
import { getPosts } from 'libs/cms/posts-loader'
import { getProjects } from 'libs/cms/projects-loader'
import { useCallback, useState } from 'react'
import { getFormattedPosts, getFormattedProjects } from 'utilities/blockData'

export default function useProjectLoadMore(
  items: IProject[] | [],
  meta: IMeta,
): [IProject[], boolean, () => void, (category: string) => void] {
  const [projects, setProjects] = useState<IProject[] | []>(items)
  const [isShowLoadMore, setIsShowLoadMore] = useState<boolean>(true)
  const [startLoadProjects, setStartLoadProjects] = useState<number>(3)

  const onClickLoadMore = useCallback(async () => {
    console.log(startLoadProjects)
    try {
      const data = await getProjects({ start: startLoadProjects, limit: 3 })
      const { page, pageCount } = data.projects.meta.pagination
      if (data.projects.data.length) setProjects([...projects, ...getFormattedProjects(data.projects.data)])
      setStartLoadProjects(startLoadProjects * page)
      if (page === pageCount) setIsShowLoadMore(false)
    } catch (e) {
      console.log(e)
    }
  }, [startLoadProjects])

  const onClickCategories = useCallback(async (category: string) => {
    try {
      let data: IProjectsPageFields | null = null
      if (category !== 'all-projects') {
        setIsShowLoadMore(false)
        data = await getProjects({ start: 0, category })
      } else {
        setIsShowLoadMore(true)
        if (meta) data = await getProjects({ start: 0, limit: meta.pagination.pageSize })
        setStartLoadProjects(3)
      }

      if (data && data.projects.data) setProjects(getFormattedProjects(data.projects.data))
    } catch (e) {
      console.log(e)
    }
  }, [])

  return [projects, isShowLoadMore, onClickLoadMore, onClickCategories]
}

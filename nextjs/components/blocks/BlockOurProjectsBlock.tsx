import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurProjects } from '../../interfaces/blocks'
import { IProject, IProjectCategories } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getFormattedCategories, getFormattedProjects } from 'utilities/blockData'

export default function BlockOurProjectsBlock() {
  const [page] = usePage()

  if (!page?.projects.data || !page?.projects.data.length) return null

  let categories: IProjectCategories[] | []
  let projects: IProject[] | []

  if (page.projectCategories.data !== null) {
    categories = getFormattedCategories(page.projectCategories.data)
  } else categories = []

  if (page.projects.data !== null) {
    projects = getFormattedProjects(page.projects.data)
  } else projects = []

  const props = {
    Categories: categories,
    Items: projects,
    meta: page.projects.meta,
  } as IBlockOurProjects

  return getComponent<IBlockOurProjects>(Block.BlockOurProjects, props)
}

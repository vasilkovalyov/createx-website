import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurProjects } from '../../interfaces/blocks'
import { IImage, IProject, IProjectCategories } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getImageData } from 'utilities/blockData'

export default function BlockOurProjectsBlock() {
  const [page] = usePage()

  if (!page?.projects.data || !page?.projects.data.length) return null

  let categories: IProjectCategories[] | []
  let projects: IProject[] | []

  if (page.projectCategories.data !== null) {
    categories = page.projectCategories.data.map((item) => {
      const image: IImage | null = getImageData(
        item.attributes.PreviewLogoPrimary.data || null,
        item.attributes.ImageAlt,
      )
      const image2: IImage | null = getImageData(
        item.attributes.PreviewLogoSecondary.data || null,
        item.attributes.ImageAlt,
      )

      return {
        id: item.id,
        Title: item.attributes.Title,
        Name: item.attributes.Name,
        Image: image,
        Image2: image2,
      }
    })
  } else {
    categories = []
  }

  if (page.projects.data !== null) {
    projects = page.projects.data.map((item) => {
      const image: IImage | null = getImageData(item.attributes.PreviewImage.data || null, item.attributes.ImageAlt)
      let category: string[]

      if (item.attributes.project_category.data) {
        category = item.attributes.project_category.data.attributes.Name
      } else {
        category = []
      }

      const parentPage = item.attributes.page.data ? item.attributes.page.data.attributes.Slug : ''
      const urlPage = parentPage ? `${parentPage}/${item.attributes.Slug}` : item.attributes.Slug

      return {
        id: item.id,
        Title: item.attributes.Title,
        Text: item.attributes.Text,
        Image: image,
        Link: {
          url: urlPage,
          text: item.attributes.SlugText,
        },
        category: category,
      } as unknown as IProject
    })
  } else {
    projects = []
  }

  const props = {
    Categories: categories,
    Items: projects,
    meta: page.projects.meta,
  } as IBlockOurProjects

  return getComponent<IBlockOurProjects>(Block.BlockOurProjects, props)
}

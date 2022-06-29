import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurProjects } from '../../interfaces/blocks'
import { IImage, IProject, IProjectCategories } from '../../interfaces/common'
import { Block } from '../../enums/blocks'

export default function BlockOurProjectsBlock() {
  const [page] = usePage()

  if (!page?.projects.data || !page?.projects.data.length) return null

  let categories: IProjectCategories[] | []
  let projects: IProject[] | []

  if (page.projectCategories.data !== null) {
    categories = page.projectCategories.data.map((item) => {
      let image: IImage | null
      let image2: IImage | null

      if (item.attributes.PreviewLogoPrimary) {
        image = {
          Url: item.attributes.PreviewLogoPrimary.data.attributes.url,
          Alt: item.attributes.ImageAlt as string,
        }
      } else {
        image = null
      }

      if (item.attributes.PreviewLogoSecondary) {
        image2 = {
          Url: item.attributes.PreviewLogoSecondary.data.attributes.url,
          Alt: item.attributes.ImageAlt as string,
        }
      } else {
        image2 = null
      }

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
      let image: IImage | null
      let categories: string[]
      if (item.attributes.PreviewImage.data) {
        image = {
          Url: item.attributes.PreviewImage.data.attributes.url,
          Alt: item.attributes.ImageAlt as string,
        }
      } else {
        image = null
      }

      if (item.attributes.project_categories.data) {
        categories = item.attributes.project_categories.data.map((item) => {
          return item.attributes.Name
        })
      } else {
        categories = []
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
        categories: categories,
      } as unknown as IProject
    })
  } else {
    projects = []
  }

  const props = {
    Categories: categories,
    Items: projects,
  } as IBlockOurProjects

  return getComponent<IBlockOurProjects>(Block.BlockOurProjects, props)
}

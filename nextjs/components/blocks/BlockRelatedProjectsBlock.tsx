import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockLatestProjects } from '../../interfaces/blocks'
import { IImage, IProject } from '../../interfaces/common'
import { Block } from '../../enums/blocks'
import { getBlockData, getImageData } from 'utilities/blockData'

export default function BlockRelatedProjectsBlock() {
  const [page] = usePage()

  const blockData = getBlockData(page, Block.BlockRelatedProjects)
  if (!blockData) return null

  if (!page?.relatedProjects.data || !page?.relatedProjects.data.length) return null

  let projects: IProject[] | []
  if (page.relatedProjects && page.relatedProjects.data) {
    projects = page.relatedProjects.data.map((item) => {
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
    Title: blockData.Title,
    Items: projects,
  } as IBlockLatestProjects

  return getComponent<IBlockLatestProjects>(Block.BlockLatestProjects, props)
}

import { usePage } from '../../context/project'

import { getComponent } from 'components'
import { IBlockOurProjects } from '../../interfaces/blocks'
import { IImage, IProject, IProjectCategories } from '../../interfaces/common'
import { Block } from '../../enums/blocks'

export default function BlockOurProjectsBlock() {
  const [page] = usePage()

  if (!page?.works || !page?.works.data.length) return null

  let categories: IProjectCategories[] | []

  if (page.projectCategory !== null) {
    categories = page.projectCategory.data.attributes.Items.map((item) => {
      let image: IImage | null
      let image2: IImage | null

      if (item.Image.data) {
        image = {
          Url: item.Image.data.attributes.url,
          Alt: item.ImageAlt as string,
        }
      } else {
        image = null
      }

      if (item.Image.data) {
        image2 = {
          Url: item.Image2.data.attributes.url,
          Alt: item.ImageAlt as string,
        }
      } else {
        image2 = null
      }

      return {
        id: item.id,
        Name: item.Name,
        Slug: item.Slug,
        Image: image,
        Image2: image2,
      }
    })
  } else {
    categories = []
  }

  const items: IProject[] = page.works.data.map((item) => {
    let image: IImage | null
    if (item.attributes.Image.data) {
      image = {
        Url: item.attributes.Image.data.attributes.url,
        Alt: item.attributes.ImageAlt as string,
      }
    } else {
      image = null
    }

    return {
      id: item.id,
      Title: item.attributes.Title,
      Text: item.attributes.Text,
      Image: image,
      Link: {
        url: `${item.attributes.Link.page.data.attributes.Slug}/${item.attributes.Link.work_page.data.attributes.Slug}`,
        text: item.attributes.Link.Name,
      },
      CategoryName: item.attributes?.work_page.data.attributes.CategoryName,
      CategorySlug: item.attributes?.work_page.data.attributes.CategorySlug,
    } as unknown as IProject
  })

  const props = {
    Categories: categories,
    Items: items,
  } as IBlockOurProjects

  return getComponent<IBlockOurProjects>(Block.BlockOurWorks, props)
}

import { Block as EnumBlock } from 'enums/blocks'
import { Category, IImage, INewsPost, IProject, IProjectCategories } from 'interfaces/common'
import {
  FieldAttributes,
  IImageFieldData,
  IPageField,
  IPostField,
  IProjectCategoryField,
  IProjectFields,
} from 'interfaces/fields'

export const getBlockData = (page: IPageField, Block: EnumBlock): FieldAttributes<any> | null => {
  if (!page?.pages.data) null

  let bodyData: FieldAttributes<any>[] | null = null

  if (page?.pages.data && page?.pages.data[0].attributes.Body) {
    bodyData = page?.pages.data[0].attributes.Body
  }

  if (!bodyData) return null

  const blockArray = page?.pages.data[0].attributes.Body?.filter((item) => {
    if (item.BlockType === Block) return item
  })

  const data = blockArray?.length ? blockArray[0] : null

  return data
}

export const getImageData = (imageField: IImageFieldData | null, imageAlt: string): IImage | null => {
  if (!imageField) {
    return null
  }

  return {
    Url: imageField.attributes.url,
    Alt: imageAlt,
  }
}

export const getFormattedPosts = (posts: IPostField[]): INewsPost[] | [] => {
  if (!posts.length) return []

  return posts.map((item) => {
    const image: IImage | null = getImageData(item.attributes.Image.data || null, item.attributes.ImageAlt)
    let categories: Category[]

    if (item.attributes.post_categories.data) {
      categories = item.attributes.post_categories.data.map((item) => {
        return {
          Title: item.attributes.Title,
          Name: item.attributes.Name,
        }
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
      Date: item.attributes.Date,
      Link: {
        url: urlPage,
      },
      Categories: categories,
    } as INewsPost
  })
}

export const getFormattedCategories = (categories: IProjectCategoryField[]): IProjectCategories[] => {
  return categories.map((item) => {
    const image: IImage | null = getImageData(item.attributes.PreviewLogoPrimary.data || null, item.attributes.ImageAlt)
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
}

export const getFormattedProjects = (projects: IProjectFields[]): IProject[] | [] => {
  return projects.map((item) => {
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
}

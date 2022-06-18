import { IMenu, IMenuItem } from '../interfaces/pages'
import { IMenuField } from '../interfaces/fields'

export function getConvertMenuArray(menu: IMenuField[]): IMenu[] {
  if (!menu.length) return []
  const formatMenu = menu.map((item) => {
    const pages = item.pages.data.map((page) => {
      return {
        Name: page.attributes.Name,
        Slug: page.attributes.Slug,
      } as IMenuItem
    })
    return {
      ...item,
      pages: pages,
    } as unknown as IMenu
  })
  return formatMenu
}

export function getConvertMenu(menu: IMenuField): IMenu {
  const formatMenu = menu.pages.data.map((page) => {
    return {
      Name: page.attributes.Name,
      Slug: page.attributes.Slug,
    } as IMenuItem
  })
  return {
    ...menu,
    pages: formatMenu || [],
  } as unknown as IMenu
}

import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { IBreadcrumbs } from '../../interfaces/common'
import { IMenuItem } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'
import { IMenuDataFields, IMenuDataField } from '../../interfaces/fields'

export default function BlockHeroBlock() {
  const ctx = useContext(PageProvider)
  if (!ctx?.pages.data.length) return null

  const blockHeroData = ctx?.pages.data[0].attributes.Body.filter((item) => item.BlockType === Block.BlockHero)[0]
  let breadcrumbsData: IBreadcrumbs

  const breadCrumbsData = {
    "pages": {
      "data": [
        {
          "id": "1",
          "attributes": {
            "Slug": "home",
            "Name": "Home"
          }
        },
        {
          "id": "2",
          "attributes": {
            "Slug": "about",
            "Name": "About"
          }
        }
      ]
    } as IMenuDataFields,
    "activePage": {
      "data": {
        "attributes": {
          "Slug": "about"
        }
      }
    } as IMenuDataField
  }
  
  const breadActivePage: string = breadCrumbsData.activePage.data.attributes.Slug
  const breadCrumbsPages: IMenuItem[] = breadCrumbsData.pages.data.map((item) => {
    return {
      Name: item.attributes.Name,
      Slug: item.attributes.Slug
    }
  })

  if (!blockHeroData) return null
  const props = {
    BlockType: blockHeroData.BlockType,
    Title: blockHeroData.Title,
    Image: {
      Url: blockHeroData.HeroImage.data.attributes.url,
      Alt: blockHeroData.HeroImage.ImageAlt,
    },
    Text: blockHeroData.Text,
    Overlay: blockHeroData.Overlay,
    BreadCrumbs: {
      pages: breadCrumbsPages,
      activePage: breadActivePage
    }
  } as unknown as IBlockHero
  return getComponent<IBlockHero>(Block.BlockHero, props)
}

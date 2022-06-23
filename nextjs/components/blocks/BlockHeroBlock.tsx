import { usePage } from '../../context/project'
// import { usePage, useBreadcrumbs } from '../../context/project'

import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'
// import { IBreadcrumbs } from 'interfaces/common'

export default function BlockHeroBlock() {
  const [page] = usePage()
  // const [breadcrumbs] = useBreadcrumbs()

  // if (!page?.pages.data.length) return null

  if (!page?.pages.data[0].attributes.Body) return null

  const blockHeroData = page?.pages.data[0].attributes.Body.filter((item) => {
    if (item.BlockType === Block.BlockHero) {
      return item.BlockType === Block.BlockHero
    }
  })[0]

  // let breadcrumbsData: IBreadcrumbs | null

  // if (breadcrumbs !== null && breadcrumbs.pages.length == null) {
  //   breadcrumbsData = {
  //     activePage: breadcrumbs.activePage.data.attributes.Slug,
  //     pages: breadcrumbs.pages.data.map((item) => {
  //       return {
  //         Name: item.attributes.Name,
  //         Slug: item.attributes.Slug,
  //       }
  //     }),
  //   }
  //   if (breadcrumbs.inner_page) {
  //     breadcrumbsData = {
  //       ...breadcrumbsData,
  //       pages: [
  //         ...breadcrumbsData.pages,
  //         {
  //           Name: breadcrumbs.inner_page.data.attributes.Title,
  //           Slug: breadcrumbs.inner_page.data.attributes.Slug,
  //         },
  //       ],
  //     }
  //   }
  // } else {
  //   breadcrumbsData = null
  // }

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
    // BreadCrumbs: breadcrumbsData || null,
  } as unknown as IBlockHero
  return getComponent<IBlockHero>(Block.BlockHero, props)
}

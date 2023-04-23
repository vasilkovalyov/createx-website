import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'
import { ISeo } from '@/components/Layout/Layout.type'

import { renderBlocks, renderByBlockType } from '@/cms/blocks'
import { BlockEnum } from '@/utils/blockEnums'
import CmsBlockServices from '@/cms//blocks/CmsBlockServices'
import { IBreadcrumbItem } from '@/components/Breadcrumbs/Breadcrumbs.type'

function Services() {
  const { pages, pageServices } = usePage()
  const seoData = pages.data[0].attributes.Seo
  const body = pages.data[0].attributes.Body

  let seo: ISeo | null = null
  if (seoData) {
    seo = {
      title: seoData.Title,
      description: seoData.Description,
      keywords: seoData.Keywords,
    }
  }

  const breadcrumbs: IBreadcrumbItem[] | [] = [
    {
      id: '0',
      text: 'Homepage',
      href: '/',
    },
    {
      id: '1',
      text: pages.data[0].attributes.Heading,
      href: `/${pages.data[0].attributes.Slug}`,
    },
  ]

  return (
    <Layout head={seo}>
      {renderBlocks(body, breadcrumbs)}
      <CmsBlockServices Items={pageServices.data} />
    </Layout>
  )
}

export default Services

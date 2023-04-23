import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'
import { ISeo } from '@/components/Layout/Layout.type'

import { renderBlocks } from '@/cms/blocks'
import { IBreadcrumbItem } from '@/components/Breadcrumbs/Breadcrumbs.type'

function Service() {
  const { pages } = usePage()
  const parentPageBody = pages.data[0].attributes
  const attributes = parentPageBody.page_services.data[0].attributes
  const seoData = attributes.Seo
  const body = attributes.Body

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
      text: parentPageBody.Heading,
      href: `/${parentPageBody.Slug}`,
    },
    {
      id: '2',
      text: attributes.Heading,
    },
  ]

  return <Layout head={seo}>{<div>{renderBlocks(body, breadcrumbs)}</div>}</Layout>
}

export default Service

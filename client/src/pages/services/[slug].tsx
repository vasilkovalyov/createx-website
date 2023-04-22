import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'
import { ISeo } from '@/components/Layout/Layout.type'

import { renderBlocks } from '@/cms/blocks'

function Service() {
  const { pages } = usePage()
  const seoData = pages.data[0].attributes.page_services.data[0].attributes.Seo
  const body = pages.data[0].attributes.page_services.data[0].attributes.Body

  let seo: ISeo | null = null
  if (seoData) {
    seo = {
      title: seoData.Title,
      description: seoData.Description,
      keywords: seoData.Keywords,
    }
  }

  return <Layout head={seo}>{<div>{renderBlocks(body)}</div>}</Layout>
}

export default Service

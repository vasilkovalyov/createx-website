import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'

import { renderBlocks } from '@/cms/blocks'
import { ISeo } from '@/components/Layout/Layout.type'

export default function Home() {
  const { pages } = usePage()
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
  return <Layout head={seo}>{renderBlocks(body)}</Layout>
}

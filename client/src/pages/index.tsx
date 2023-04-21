import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'

import { renderBlocks } from '@/cms/blocks'

export default function Home() {
  const { pages } = usePage()
  const seoData = pages.data[0].attributes.Seo
  const body = pages.data[0].attributes.Body
  return (
    <Layout
      head={{
        title: seoData.Title,
        description: seoData.Description,
        keywords: seoData.Keywords,
      }}
    >
      {renderBlocks(body)}
    </Layout>
  )
}

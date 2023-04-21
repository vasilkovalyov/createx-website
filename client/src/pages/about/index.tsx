import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'

export default function About() {
  const { pages } = usePage()
  const seoData = pages.data[0].attributes.Seo

  return (
    <Layout
      head={{
        title: seoData.Title,
        description: seoData.Description,
        keywords: seoData.Keywords,
      }}
    >
      {pages.data[0].attributes.Heading}
    </Layout>
  )
}

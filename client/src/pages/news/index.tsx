import { usePage } from '@/context/page-context'
import Layout from '@/components/Layout'
import { renderBlocks } from '@/cms/blocks'
import { ISeo } from '@/components/Layout/Layout.type'
import { IBreadcrumbItem } from '@/components/Breadcrumbs/Breadcrumbs.type'

function News() {
  const { pages } = usePage()
  const attributes = pages.data[0].attributes
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
      text: attributes.Heading,
    },
  ]

  return <Layout head={seo}>{renderBlocks(body, breadcrumbs)}</Layout>
}

export default News

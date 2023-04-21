import Head from 'next/head'
import { usePage } from '@/context/page-context'

export default function Home() {
  const { pages } = usePage()
  const data = pages.data[0].attributes.Seo

  return (
    <div>
      <Head>
        <title>{data.Title}</title>
        <meta name="description" content={data.Description}></meta>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {pages.data[0].attributes.Heading}
      </main>
    </div>
  )
}

import '@/styles/main.scss'

import { NextPageContext } from 'next'
import type { AppProps } from 'next/app'

import client from '@/apollo-queries/setup'
import { GetBasePage, GetServicePage } from '../apollo-queries/fragment-pages'
import { PageResponseProps } from '@/cms/interfaces/page'
import { PageProvider } from '@/context/page-context'
import getPageName from '@/utils/getPageName'

export default function App({ Component, pageProps }: AppProps<{ data: PageResponseProps }>) {
  return (
    <PageProvider {...pageProps.data}>
      <Component {...pageProps} />
    </PageProvider>
  )
}

App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  let pathName: string = getPageName(ctx.pathname)

  if (ctx.query) {
    const pathName = ctx.query.slug
    const basepage = ctx.asPath?.split('/')[1]

    if (pathName && basepage === 'services') {
      const { data } = await client.query<PageResponseProps>({
        query: GetServicePage,
        fetchPolicy: 'network-only',
        variables: {
          page: basepage,
          subpage: pathName,
        },
      })
      return {
        pageProps: {
          data: data,
        },
      }
    }
  }

  if (pathName === '404') return { pageProps: { data: null } }

  const { data } = await client.query<PageResponseProps>({
    query: GetBasePage,
    fetchPolicy: 'network-only',
    variables: {
      page: pathName,
    },
  })

  return { pageProps: { data: data } }
}

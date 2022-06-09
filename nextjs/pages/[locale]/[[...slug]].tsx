import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'

import { renderBlocks } from '../../components'
import PrimaryLayout from '../../components/theme/plain/Layout/PrimaryLayout'

import { ISeo } from '../../interfaces/pages'
import { IPageField } from '../../interfaces/fields'
import { getPageData } from '../../libs/cms/queries'

import { PageProvider } from '../../context/project'

export const getServerSideProps = async ({ params, resolvedUrl }) => {
  const pageName = resolvedUrl.replace('/en', '')
  const data = await getPageData(!pageName ? '/' : pageName.replace('/', ''))
  let page = {}
  if (data) page = data
  return {
    props: {
      ...page,
    },
  }
}

const defaultSeo: ISeo = {
  Title: 'Title',
  Keywords: ['Keywords'],
  Description: 'Description',
}

const DynamicPage: NextPage = (page: IPageField) => {
  const seo = defaultSeo
  const [pageProject, setPageProject] = useState<IPageField | null>(null)
  const router = useRouter()
  const pageBody = page?.pages.data[0].attributes.Body

  useEffect(() => {
    if (page) {
      setPageProject(page)
    }
  }, [])

  if (!router.isReady) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{seo.Title || 'Title'}</title>
        <meta name="description" content={seo.Description || 'Description'} />
        <meta name="keywords" content={seo.Keywords.toString() || 'Keywords'}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageProvider.Provider value={pageProject}>
        <PrimaryLayout>{pageBody && pageBody.length && renderBlocks(pageBody)}</PrimaryLayout>
      </PageProvider.Provider>
    </>
  )
}

export default DynamicPage

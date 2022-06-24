import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import PageServices from '../../components/pages/PageServices'
import PageServiceInner from 'components/pages/PageServiceInner'

import { renderBlocks, renderByBlockType } from '../../components'
import PrimaryLayout from '../../components/theme/plain/Layout/PrimaryLayout'

import { ISeo } from '../../interfaces/pages'
import { IPageField } from '../../interfaces/fields'
import { getPageData, getPageServices } from '../../libs/cms/queries'
import { Block } from '../../enums/blocks'
import { Page } from '../../enums/pages'

import { PageProvider } from '../../context/project'

export const getServerSideProps = async ({ params, resolvedUrl }) => {
  const NODE_ENV = process.env.NODE_ENV

  const pageName = resolvedUrl.replace('/en', '')
  let data: any
  const pathName = !pageName ? '/' : pageName.replace('/', '')

  if (pathName === 'services') {
    data = await getPageServices(pathName)
  } else {
    data = await getPageData(pathName)
  }

  let page = {}
  if (data) {
    page = data
  }

  return {
    props: {
      NODE_ENV,
      ...page,
    },
  }
}

const defaultSeo: ISeo = {
  Title: 'Title',
  Keywords: ['Keywords'],
  Description: 'Description',
}

const DynamicPage = (page: IPageField) => {
  const seo = defaultSeo
  let updatedPage = page
  const router = useRouter()

  let pageBody
  let showFormDetails
  let pageAttributes
  if (updatedPage?.pages.data.length) {
    pageAttributes = updatedPage?.pages.data[0].attributes
    pageBody = pageAttributes.Body
    showFormDetails = pageAttributes.ShowFormDetails
  }
  if (updatedPage?.servicePages && updatedPage?.servicePages.data.length) {
    pageAttributes = updatedPage?.servicePages.data[0].attributes
    pageBody = pageAttributes.Body
    showFormDetails = pageAttributes.ShowFormDetails
  }

  if (!router.isReady) {
    return <div>Loading...</div>
  }

  if (pageAttributes.ContentType === Page.ServicePage) {
    updatedPage = {
      ...page,
      pages: page.servicePages,
    }
  }

  const renderPages = () => {
    if (pageAttributes.ContentType === Page.ServicePage) {
      console.log('updatedPage', updatedPage)
      return <PageServiceInner />
    }

    if (pageAttributes.ContentType === Page.ServicesPage) {
      return <PageServices />
    }

    if (pageBody && pageBody.length) {
      return renderBlocks(pageBody)
    }

    return null
  }

  return (
    <>
      <Head>
        <title>{seo.Title || 'Title'}</title>
        <meta name="description" content={seo.Description || 'Description'} />
        <meta name="keywords" content={seo.Keywords.toString() || 'Keywords'}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageProvider {...updatedPage}>
        <PrimaryLayout>
          {renderPages()}
          {showFormDetails ? <>{renderByBlockType(Block.BlockFormDetail)}</> : null}
        </PrimaryLayout>
      </PageProvider>
    </>
  )
}

export default DynamicPage

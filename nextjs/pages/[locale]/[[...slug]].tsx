import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'

import PageServices from '../../components/pages/PageServices'
import PageServiceInner from 'components/pages/PageServiceInner'

import { renderBlocks, renderByBlockType } from '../../components'
import PrimaryLayout from '../../components/theme/plain/Layout/PrimaryLayout'

import { ISeo } from '../../interfaces/pages'
import { IPageField } from '../../interfaces/fields'
import { getPageData } from '../../libs/cms/queries'
import { Block } from '../../enums/blocks'
import { Page } from '../../enums/pages'

import { PageProvider } from '../../context/project'

export const getServerSideProps = async ({ params, resolvedUrl }) => {
  const NODE_ENV = process.env.NODE_ENV

  const pageName = resolvedUrl.replace('/en', '')
  const data = await getPageData(!pageName ? '/' : pageName.replace('/', ''))
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
  const [pageProject, setPageProject] = useState<IPageField | null>(null)
  const router = useRouter()
  console.log(page)
  let pageData: IPageField | null

  let pageBody
  let showFormDetails
  let pageAttributes

  if (page?.pages.data.length) {
    pageAttributes = page?.pages.data[0].attributes
    pageBody = pageAttributes.Body
    showFormDetails = pageAttributes.ShowFormDetails
  }
  if (page?.servicePages.data.length) {
    pageAttributes = page?.servicePages.data[0].attributes
    pageBody = pageAttributes.Body
    showFormDetails = pageAttributes.ShowFormDetails
  }
  // const pageAttributes = page?.pages.data[0].attributes
  // const pageBody = pageAttributes.Body
  // const showFormDetails = pageAttributes.ShowFormDetails

  useEffect(() => {
    if (page) {
      if (page?.pages.data.length) {

      }
      setPageProject(page)
    }
  }, [])

  if (!router.isReady) {
    return <div>Loading...</div>
  }

 
  console.log('pageAttributes', pageAttributes)
  const renderPages = () => {
    if (pageAttributes.ContentType === Page.ServicePage) {
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
      <PageProvider.Provider value={pageProject}>
        <PrimaryLayout>
          { renderPages() }
          {
            showFormDetails ? (
              <>
                { renderByBlockType(Block.BlockFormDetail) }
              </>
            ) : null
          }
        </PrimaryLayout>
      </PageProvider.Provider>
    </>
  )
}

export default DynamicPage

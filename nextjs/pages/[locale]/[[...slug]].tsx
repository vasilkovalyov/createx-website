import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import PagePostSingle from 'components/pages/PagePostSingle'

import { renderBlocks, renderByBlockType } from '../../components'
import PrimaryLayout from '../../components/theme/plain/Layout/PrimaryLayout'

import { ISeo } from '../../interfaces/pages'
import { IPageField } from '../../interfaces/fields'

import QueryAjax from '../../services/QueryAjax'

import { Block } from '../../enums/blocks'
import { Page } from '../../enums/pages'

import { PageProvider } from '../../context/project'

const getDataByPath = async (path) => {
  const [page, subpage] = path.split('/')
  if (page === 'services' && subpage) {
    return QueryAjax.getPageSingleService(subpage)
  }
  if (page === 'our-work' && subpage) {
    const data = await QueryAjax.getPageSingleProject(subpage)
    const relatedProjects = await QueryAjax.getRelatedProjects(
      data.pages.data[0].attributes.project_category.data.attributes.Name,
    )
    return {
      ...data,
      ...relatedProjects,
    }
  }
  if (page === 'news' && subpage) {
    return await QueryAjax.getPageSinglePost(subpage)
  }
  return await QueryAjax.getPageData(page)
}

export const getServerSideProps = async ({ resolvedUrl }) => {
  const NODE_ENV = process.env.NODE_ENV
  const pageName = resolvedUrl.replace('/en', '')
  const pathName = !pageName ? '/' : pageName.replace('/', '')

  const data = await getDataByPath(pathName)

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
  const updatedPage = page
  const router = useRouter()

  let pageBody
  let showFormDetails
  let pageAttributes

  if (!updatedPage.pages) {
    return 'Empty page'
  }

  if (updatedPage?.pages.data && updatedPage?.pages.data.length) {
    pageAttributes = updatedPage?.pages.data[0].attributes
    pageBody = pageAttributes.Body
    showFormDetails = pageAttributes.ShowFormDetails
  }

  if (!router.isReady) {
    return <div>Loading...</div>
  }

  const renderPages = () => {
    if (pageAttributes && pageAttributes.ContentType === Page.PagePostSingle) {
      return <PagePostSingle />
    }

    if (pageBody && pageBody.length) {
      return renderBlocks(pageBody)
    }

    return null
  }

  console.log('updatedPage', updatedPage)

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

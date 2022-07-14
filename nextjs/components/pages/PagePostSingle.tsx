import React from 'react'
import ReactMarkdown from 'react-markdown'
import { usePage } from 'context/project'

import BlockPostHero from 'components/theme/plain/BlockPostHero'
import { IImage } from 'interfaces/common'

import ImageComponent from '../theme/plain/Image'
import Container from 'components/theme/plain/Container'

export default function PagePostSingle() {
  const [page] = usePage()
  const pageData = page?.pages.data

  if (!pageData) return null

  const pageAttributes = pageData[0].attributes

  let postCategory: string | null = null
  if (pageAttributes.post_categories) {
    postCategory = pageAttributes.post_categories.data[0].attributes.Title
  }

  let Image: IImage | null
  if (pageAttributes.Image.data) {
    Image = {
      Url: pageAttributes.Image.data.attributes.url,
      Alt: pageAttributes.ImageAlt,
    }
  } else {
    Image = null
  }

  return (
    <>
      <BlockPostHero Title={pageAttributes.Title} Category={postCategory} Date={pageAttributes.Date} />
      <section className="block-post-single">
        <Container>
          <ImageComponent {...(Image as IImage)} className="block-post-single__image" />
          <div className="block-post-single__content">
            {pageAttributes.RichText && <ReactMarkdown>{pageAttributes.RichText}</ReactMarkdown>}
          </div>
        </Container>
      </section>
    </>
  )
}

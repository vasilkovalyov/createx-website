import React from 'react'
import Link from 'next/link'

import Typography from './Typography'
import ImageComponent from './Image'

import { INewsPost } from '../../../interfaces/common'

export default function NewsPost({ Image, Title, Category, Date, Text, Slug, IsCompact = false }: INewsPost) {
  return (
    <div className={`news-post shadow-wrapper ${IsCompact ? 'news-post--compact' : ''}`}>
      {Image && Image.Url && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="news-post__image" />}
      <div className="news-post__body">
        {Slug ? (
          <Link href={Slug}>
            <a className="news-post__link-title">
              <Typography level="h6" text={Title} className="news-post__title" />
            </a>
          </Link>
        ) : (
          <Typography level="h6" text={Title} className="news-post__title" />
        )}

        <ul className="news-post__description list-reset text-xs text-color-secondary">
          <li className="news-post__description-item">{Category}</li>
          <li className="news-post__description-item">{Date}</li>
        </ul>
        {Text && <Typography text={Text} className="news-post__title" />}
      </div>
    </div>
  )
}

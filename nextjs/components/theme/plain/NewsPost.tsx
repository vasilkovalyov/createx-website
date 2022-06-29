import React from 'react'
import LinkComponent from 'next/link'

import Typography from './Typography'
import ImageComponent from './Image'

import { getBaseDateFormat } from '../../../utilities/dateFormatting'
import { INewsPost } from '../../../interfaces/common'

export default function NewsPost({ Image, Title, Categories, Date, Text, IsCompact = false, Link }: INewsPost) {
  return (
    <div className={`news-post shadow-wrapper ${IsCompact ? 'news-post--compact' : ''}`}>
      {Image && Image.Url && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="news-post__image" />}
      <div className="news-post__body">
        {Link.url ? (
          <LinkComponent href={`/en/${Link.url}`}>
            <a className="news-post__link-title">
              <Typography level="h6" text={Title} className="news-post__title" />
            </a>
          </LinkComponent>
        ) : (
          <Typography level="h6" text={Title} className="news-post__title" />
        )}

        <ul className="news-post__description list-reset text-xs text-color-secondary">
          {Categories && Categories.length ? (
            <>
              {Categories.map((category, index) => (
                <li className="news-post__description-item" key={index}>
                  {category.Title}
                </li>
              ))}
            </>
          ) : null}
          {Date && <li className="news-post__description-item">{getBaseDateFormat(Date)}</li>}
        </ul>
        {!IsCompact && Text && <Typography text={Text} className="news-post__title" />}
      </div>
    </div>
  )
}

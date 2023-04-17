import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import Typography from '../Typography'
import { INewsPost } from './NewsPost.type'

function NewsPost({ image, href, category, date, heading, text, className }: INewsPost) {
  return (
    <div className={cn('news-post', className)}>
      {image ? (
        <Link href={href} className="block news-post__image relative">
          <Image {...image} fill className="" />
        </Link>
      ) : null}
      <div className="__body p-12 md:p-24">
        <Typography level="h6" className="text-gray-900 mb-12">
          <Link href={href} className="transition-color duration-300 ease-in-out hover:text-primary">
            {heading}
          </Link>
        </Typography>
        <ul className="flex flex-wrap text-gray-600 text-sm mb-16">
          <li>{category}</li>
          <li className="mx-12">|</li>
          <li>{date}</li>
        </ul>
        {text ? <Typography className="mb-8 text-gray-800 text-md">{text}</Typography> : null}
      </div>
    </div>
  )
}

export default NewsPost

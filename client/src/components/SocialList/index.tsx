import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import IcomoonIcon from '../IcomoonIcon'

import { ISocialList } from './SocialList.type'

function SocialList({ items, size = 'md', className }: ISocialList) {
  const sizeLink = cn({
    'text-h5_lg': size === 'sm',
    'text-h3_lg': size === 'md',
  })
  return (
    <ul className={cn('social-list flex flex-wrap', className)}>
      {items.map((item) => (
        <li key={item.id} className="mx-10">
          <Link href={item.href} className="hover:text-primary">
            <IcomoonIcon icon={item.icon} className={sizeLink} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SocialList

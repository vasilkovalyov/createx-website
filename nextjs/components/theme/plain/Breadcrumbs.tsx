import React from 'react'
import Link from 'next/link'

import { IBreadcrumbs } from '../../../interfaces/common'

export default function Breadcrumbs({ pages, activePage }: IBreadcrumbs) {
  return (
    <ul className="breadcrumbs list-reset flex flex-wrap">
      {pages.map((page) => (
        <li key={page.Slug} className="breadcrumbs__item">
          {page.Slug === activePage ? (
            <span className="breadcrumbs__target-page">{page.Name}</span>
          ) : (
            <Link href={`/en/${page.Slug}`}>
              <a className="breadcrumbs__link">{page.Name}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

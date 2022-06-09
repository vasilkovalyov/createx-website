import React from 'react'
import Link from 'next/link'

import { IMenu } from '../../../../interfaces/pages'

export default function Navigation({ className, Menu }: { className?: string; Menu: IMenu }) {
  return (
    <nav className={`navigation ${className}`}>
      <ul className="navigation__list list-reset">
        {Menu.pages && Menu.pages.length ? (
          <>
            {Menu.pages.map((page) => (
              <li key={page.Slug} className="navigation__item">
                <Link href={page.Slug === 'home' ? '/en/' : `/en/${page.Slug}`}>
                  <a className="navigation__link">{page.Name}</a>
                </Link>
              </li>
            ))}
          </>
        ) : null}
      </ul>
    </nav>
  )
}

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { INavigation } from './Navigation.type'

function Navigation({ items, className }: INavigation) {
  return (
    <nav className={cn('navigation', className)}>
      <ul className="navigation__list lg:flex">
        {items.map((item) => (
          <li key={item.id} className="navigation__list-item mr-40">
            <Link href={item.href} className="text-gray-700 font-bold hover:text-primary">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Typography from '../Typography'
import { IBreadcrumbs } from './Breadcrumbs.type'

function Benefit({ items, className }: IBreadcrumbs) {
  return (
    <div className={cn('breadcrumbs', className)}>
      <ul className="breadcrumbs__list flex flex-wrap">
        {items.map((item, index) => (
          <>
            <li key={item.id} className="breadcrumbs__item">
              {item.href ? (
                <Link href={item.href} className="text-gray-700 hover:text-primary text-sm">
                  {item.text}
                </Link>
              ) : (
                <Typography level="span" className="text-gray-500 text-sm">
                  {item.text}
                </Typography>
              )}
            </li>
            {items.length - 1 !== index ? <li className="text-gray-500 mx-8">/</li> : null}
          </>
        ))}
      </ul>
    </div>
  )
}

export default Benefit

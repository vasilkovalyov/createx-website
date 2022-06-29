import React from 'react'

import Button from './Button'

import { INewsCategories } from '../../../interfaces/common'

export default function NewsCategories({
  Items,
  onClick,
}: {
  Items: INewsCategories[]
  onClick?: (value: string) => void
}) {
  function handleClick(value: string) {
    onClick && onClick(value)
  }

  return (
    <ul className="news-categories list-reset">
      {Items && Items.length ? (
        <>
          {Items.map((item) => (
            <li key={item.id} className="news-categories__item">
              <Button
                name={item.Title}
                type="transparent"
                uppercase={false}
                onClick={() => handleClick(item.Name)}
                className="news-categories__btn"
              />
            </li>
          ))}
        </>
      ) : null}
    </ul>
  )
}

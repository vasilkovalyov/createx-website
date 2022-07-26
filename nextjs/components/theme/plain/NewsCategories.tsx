import React, { memo, useState } from 'react'
import cn from 'classnames'

import Button from './Button'

import { INewsCategories } from '../../../interfaces/common'
import { Identificator } from 'types/common'

function NewsCategoriesMemo({ Items, onClick }: { Items: INewsCategories[]; onClick?: (value: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<Identificator>(Items[0].id)

  const handleClick = (value: string, id: Identificator) => {
    setActiveCategory(id)
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
                onClick={() => handleClick(item.Name, item.id)}
                className={cn('news-categories__btn', { active: item.id === activeCategory })}
              />
            </li>
          ))}
        </>
      ) : null}
    </ul>
  )
}

const NewsCategories = memo(NewsCategoriesMemo)
export default NewsCategories

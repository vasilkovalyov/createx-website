import React, { useState } from 'react'
import cn from 'classnames'
import Button from '../Button'
import { ICategoryFilters } from './CategoryFilters.type'

function CategoryFilters({ items, className, onHandleSelect }: ICategoryFilters) {
  const [active, setActive] = useState<number>(0)

  function handleClick(id: string, value: string, index: number) {
    setActive(index)
    onHandleSelect(id, value)
  }

  return (
    <div className={cn('category-filters py-14', className)}>
      <ul className="category-filters__list flex flex-wrap">
        {items &&
          items.length &&
          items.map((item, index) => (
            <li key={item.id} className="category-filters__list-item">
              <Button
                onClick={() => handleClick(item.id, item.value, index)}
                fill="transparent"
                size="small"
                className={cn('text-gray-500 capitalize  hover:text-primary mb-12', {
                  'text-primary border-primary': index === active,
                })}
              >
                {item.text}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default CategoryFilters

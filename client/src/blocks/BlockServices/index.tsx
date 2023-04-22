import React from 'react'
import cn from 'classnames'

import Service from '../../components/Service'

import { IBlockServices } from './BlockServices.type'

function BlockServices({ items, className }: IBlockServices) {
  return (
    <div className={cn('block-service-preview pt-40 desktop:pt-80 pb-40 tablet:pb-80 desktop:pb-120', className)}>
      <div className="container">
        <div className="mb-24 md:mb-80">
          {items &&
            items.map((item, index) => (
              <Service key={item.id} {...item} className="mb-40 sm:mb-60 lg:mb-80" reversed={index % 2 !== 0} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlockServices

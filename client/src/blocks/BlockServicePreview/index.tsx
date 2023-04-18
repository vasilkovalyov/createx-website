import React from 'react'
import cn from 'classnames'

import Typography from '../../components/Typography'
import ServicePreview from '../../components/ServicePreview'

import { IBlockServicePreview } from './BlockServicePreview.type'

function BlockServicePreview({ heading, text, items, className }: IBlockServicePreview) {
  return (
    <div className={cn('block-service-preview pt-40 desktop:pt-80 pb-40 tablet:pb-80 desktop:pb-120', className)}>
      <div className="block-service-preview__container container">
        <Typography level="h2" className="block-service-preview__heading mb-24 text-center">
          {heading}
        </Typography>
        {text ? (
          <Typography className="block-service-preview__text text-lg text-center mb-20 tablet:mb-60">{text}</Typography>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-7 mb-24 md:mb-80">
          {items &&
            items.map((item) => (
              <ServicePreview key={item.id} {...item} className="max-w-[285px] mx-auto md:mx-0 mb-24" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlockServicePreview

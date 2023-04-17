import React from 'react'
import cn from 'classnames'

import Typography from '../../components/Typography'
import Benefit from '../../components/Benefit'

import { IBlockBenefits } from './BlockBenefits.type'

function BlockBenefits({ heading, text, items, theme, className }: IBlockBenefits) {
  return (
    <div className={cn('block-benefits', { 'block-benefits--dark': theme === 'dark' }, className)}>
      <div className="block-benefits__container container">
        <Typography level="h2" className="block-benefits__heading mb-24 text-center">
          {heading}
        </Typography>
        {text ? <Typography className="block-benefits__text">{text}</Typography> : null}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items &&
            items.map((item) => (
              <Benefit key={item.id} {...item} theme={theme} className="max-w-[285px] mx-auto mb-12" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlockBenefits

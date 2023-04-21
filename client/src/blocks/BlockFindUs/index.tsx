import React from 'react'
import cn from 'classnames'

import Typography from '../../components/Typography'
import SocialList from '../../components/SocialList'

import { IBlockFindUs } from './BlockFindUs.type'

function BlockFindUs({ heading, items, className }: IBlockFindUs) {
  return (
    <div className={cn('block-find-us bg-gray-100 py-40 md-py-60 lg-py-80', className)}>
      <div className="block-find-us__container container">
        <Typography level="h2" className="block-find-us__heading mb-24 text-center">
          {heading}
        </Typography>
        <div className="flex justify-center">
          <SocialList items={items} size="md" className="text-gray-600" />
        </div>
      </div>
    </div>
  )
}

export default BlockFindUs

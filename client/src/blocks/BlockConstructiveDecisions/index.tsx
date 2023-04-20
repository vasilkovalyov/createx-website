import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import Typography from '../../components/Typography'

import { IBlockConstructiveDecisions } from './BlockConstructiveDecisions.type'

function BlockHeroCarousel({ heading, image, richText, className }: IBlockConstructiveDecisions) {
  return (
    <div className={cn('block-constructive-decisions py-40 md-py-80 relative', className)}>
      <div className="block-constructive-decisions__container container relative">
        <div className="md:flex md:justify-between">
          {image ? (
            <div className="md:w-2/5 mb-32 md:mb-0 md:mr-60 lg:mr-120">
              <div className="block-constructive-decisions__image relative rounded-sm overflow-hidden ">
                <Image {...image} className="object-cover" />
              </div>
            </div>
          ) : null}
          <div className="md:w-1/2">
            <Typography level="h2" className="block-constructive-decisions__heading mb-24 md:mb-60">
              {heading}
            </Typography>
            {richText ? (
              <div
                className="block-constructive-decisions__richtext text-gray-700"
                dangerouslySetInnerHTML={{ __html: richText }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockHeroCarousel

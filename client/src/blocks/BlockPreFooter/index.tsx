import React from 'react'
import cn from 'classnames'

import Image from 'next/image'
import FormDetails from '../../components/Form/FormDetails'
import { IBlockPreFooter } from './BlockPreFooter.type'

function BlockOurTeam({ image, className }: IBlockPreFooter) {
  return (
    <div className={cn('block-pre-footer relative py-60 lg:py-80 flex', className)}>
      {image ? (
        <div className="block-pre-footer__bg-image fill-absolute">
          <Image {...image} fill className="object-cover" />
        </div>
      ) : null}
      <div className="container relative z-1 flex items-center">
        <div className="block-pre-footer__body md:ml-auto">
          <FormDetails heading="A quick way to discuss details" />
        </div>
      </div>
    </div>
  )
}

export default BlockOurTeam

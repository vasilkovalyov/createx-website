import React, { memo } from 'react'
import cn from 'classnames'

import Typography from './Typography'
import { IBlockHeading } from '../../../interfaces/common'

function BlockHeadingMemo({
  Title,
  Text,
  headingLevel = 'h2',
  textSize = 'middle',
  aligned,
  className,
}: IBlockHeading) {
  const alignedContent = cn({
    'block-heading--center text-align--center': aligned === 'center',
    'block-heading--right text-align--right': aligned === 'right',
  })

  const textSizeView = cn({
    'text-sm': textSize === 'small',
    'text-md': textSize === 'middle',
    'text-lg': textSize === 'large',
  })

  return (
    <div className={cn('block-heading', alignedContent, className)}>
      {Title && <Typography level={headingLevel} text={Title} className="block-heading__title" />}
      {Text && <Typography text={Text} className={`block-heading__text ${textSizeView}`} />}
    </div>
  )
}

const BlockHeading = memo(BlockHeadingMemo)
export default BlockHeading

import React from 'react'
import cn from 'classnames'

import Typography from '../../components/Typography'
import TeamMember from '../../components/TeamMember'

import { IBlockOurTeam } from './BlockOurTeam.type'

function BlockOurTeam({ heading, text, items, className }: IBlockOurTeam) {
  return (
    <div className={cn('block-our-team pt-40 desktop:pt-80 pb-40 tablet:pb-80 desktop:pb-120', className)}>
      <div className="block-our-team__container container">
        <Typography level="h2" className="block-our-team__heading mb-24 text-center">
          {heading}
        </Typography>
        {text ? (
          <Typography className="block-our-team__text text-lg text-center mb-20 tablet:mb-60">{text}</Typography>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-7 mb-24 md:mb-80">
          {items &&
            items.map((item) => (
              <TeamMember key={item.id} {...item} className="max-w-[285px] mx-auto mb-24 md:mb-60" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlockOurTeam

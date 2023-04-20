import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import Typography from '../../components/Typography'

import { IBlockTeamMemberQuote } from './BlockTeamMemberQuote.type'

function TeamMemberQuote({ image, author, position, richText, signatureImage, className }: IBlockTeamMemberQuote) {
  return (
    <div className={cn('block-team-member-quote', className)}>
      <div className="block-team-member-quote__inner">
        <div className="block-team-member-quote__container container md:flex md:items-center xl:items-start">
          {image ? (
            <div className="block-team-member-quote__image relative rounded-sm overflow-hidden">
              <Image {...image} className="object-cover" />
            </div>
          ) : null}
          <div className={cn('block-team-member-quote__body', { 'block-team-member-quote__body--full': !image })}>
            <div
              className="block-team-member-quote__richtext text-gray-800 mb-60 text-xl"
              dangerouslySetInnerHTML={{ __html: richText }}
            />
            <div className="md:flex md:justify-between">
              <div className="md:mr-16">
                <Typography className="text-gray-700 text-md font-bold mb-4">{author}</Typography>
                <Typography className="text-gray-600 text-sm">{position}</Typography>
              </div>
              {signatureImage ? (
                <div className="block-team-member-quote__image">
                  <Image {...signatureImage} className="object-cover ml-auto" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberQuote

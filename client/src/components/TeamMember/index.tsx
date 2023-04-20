import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import IcomoonIcon from '../IcomoonIcon'
import Typography from '../Typography'

import { ITeamMember } from './TeamMember.type'

function TeamMember({ image, name, position, socialLinks, className }: ITeamMember) {
  return (
    <div className={cn('team-member', className)}>
      <div className="team-member__image relative rounded-sm overflow-hidden">
        {image ? <Image {...image} fill className="fill-absolute object-cover" /> : null}
        {socialLinks && socialLinks.length ? (
          <div className="team-member__social-box absolute bottom-0 left-0 right-0 p-24">
            <div className="absolute fill-absolute bg-primary opacity-70"></div>
            <ul className="relative z-1 flex flex-wrap justify-center">
              {socialLinks.map((link, index) => (
                <li key={index} className="mx-6">
                  <Link href={link.href} className="text-white hover:opacity-50">
                    <IcomoonIcon icon={link.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="team-member__body pt-16 pb-24 px-20 bg-white text-center">
        <Typography level="h6" className="text-gray-700 mb-4">
          {name}
        </Typography>
        <Typography className="text-gray-700 text-md">{position}</Typography>
      </div>
    </div>
  )
}

export default TeamMember

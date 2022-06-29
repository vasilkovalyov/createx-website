import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { ISocialList } from '../../../interfaces/common'
import { EnumsIcon } from 'enums/icons'
import IcoMoonIcon from './IcoMoonIcon'

export default function PersonCard({ Items, className, size = 'large' }: ISocialList) {
  const socialSize = cn({
    'social-list--small': size === 'small',
    'social-list--middle': size === 'middle',
    'social-list--large': size === 'large',
  })

  const renderSocialIcon = (name: EnumsIcon) => {
    if (name === 'icon-linked_in') {
      return <IcoMoonIcon icon={'icon-linked-In' as EnumsIcon} />
    } else {
      return <IcoMoonIcon icon={name as unknown as EnumsIcon} />
    }
  }

  return (
    <ul className={cn('social-list list-reset', socialSize, className)}>
      {Items.map((link) => (
        <li key={link.id} className="social-list__item">
          <Link href={link.Url}>
            <a target="_blank" className="social-list__link">
              {renderSocialIcon(link.Icon as unknown as EnumsIcon)}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

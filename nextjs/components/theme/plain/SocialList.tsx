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

    return (
        <ul className={`social-list list-reset ${socialSize} ${className ? className : ''}`}>
            {
                Items.map((link) => (
                    <li key={link.id} className="social-list__item">
                        <Link href={link.Url}>
                            <a target='_blank' className="social-list__link">
                                <IcoMoonIcon icon={link.Icon as unknown as EnumsIcon | ''} />
                            </a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

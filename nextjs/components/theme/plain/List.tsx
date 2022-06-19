import React from 'react'
import cn from 'classnames'

import { IList } from '../../../interfaces/common'

import IcoMoonIcon from './IcoMoonIcon'

export default function Image({ Items, icon, className, type = 'default' }: IList) {
	const listType = cn({
    'list--default': type === 'default',
    'list--with-icon list-reset': type === 'with-icon',
  })

  return (
    <ul className={`list ${listType} ${className ? className : ''}`}>
			{
				Items && Items.length && Items.map((item) => (
					<li key={item.id} className="list__item">
						{ type !== 'default' ? <IcoMoonIcon icon={icon} className="list__icon" /> : null }
						<span className="list__text">{item.Text}</span>
					</li>
				))
			}
    </ul>
  )
}

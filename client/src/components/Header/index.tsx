import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { IHeader } from './Header.type'

import Navigation from '../Navigation'

import { model } from '../Navigation/Navigation.model'

function Header({ image, className }: IHeader) {
  return (
    <div className={cn('header', className)}>
      <div className="header__container container flex items-center">
        <div className="header__image mr-40 lg:mr-60">{image ? <Image {...image} /> : null}</div>
        <Navigation items={model.items} />
      </div>
    </div>
  )
}

export default Header

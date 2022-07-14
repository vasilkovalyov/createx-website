import React from 'react'
import Link from 'next/link'

import Container from '../Container'
import Navigation from './Navigation'
import ImageComponent from '../Image'

import { IHeader } from '../../../../interfaces/pages'

export default function Header({ Image, Menu }: IHeader) {
  return (
    <header className="header">
      <Container className="header__container">
        {Image && Image.Url ? (
          <Link href="/">
            <a>
              <ImageComponent Url={Image.Url} Alt={Image.Alt} className="header__logo" />
            </a>
          </Link>
        ) : null}
        {Menu && <Navigation className="header-navigation" Menu={Menu} />}
      </Container>
    </header>
  )
}

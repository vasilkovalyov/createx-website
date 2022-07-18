import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { usePage } from 'context/project'

import Container from '../Container'
import Navigation from './Navigation'
import ImageComponent from '../Image'

import { IHeader } from '../../../../interfaces/pages'
import IcoMoonIcon from '../IcoMoonIcon'
import { EnumsIcon } from 'enums/icons'
import Typography from '../Typography'

export default function Header({ Image, Menu, Phone, PhoneIcon, PhoneText, Email, EmailIcon, EmailText }: IHeader) {
  const [page] = usePage()
  const headerTheme = page.pages.data[0].attributes.HeaderTheme

  const headerThemeColor = cn({
    'header--light': headerTheme === 'light',
    'header--dark': headerTheme === 'dark',
  })

  return (
    <header className={cn('header', headerThemeColor)}>
      <Container className="header__container">
        {Image && Image.Url ? (
          <Link href="/">
            <a>
              <ImageComponent Url={Image.Url} Alt={Image.Alt} className="header__logo" />
            </a>
          </Link>
        ) : null}
        {Menu && <Navigation className="header-navigation" Menu={Menu} />}
        {Phone !== '' || Email !== '' ? (
          <ul className="header-contacts list-reset flex flex-align-center">
            {Phone && (
              <li className="header-contacts__item">
                <div className="header-contacts__item-wrapper">
                  {PhoneIcon && (
                    <Link href={`tel:${Phone}`}>
                      <a className="header-contacts__icon-link">
                        <IcoMoonIcon icon={EnumsIcon.Iphone} className="header-contacts__icon" />
                      </a>
                    </Link>
                  )}
                  <div className="header-contacts__item-content">
                    {PhoneText && <Typography text={PhoneText} className="header-contacts__text font-bold" />}
                    <Link href={`tel:${Phone}`}>
                      <a className="header-contacts__link">{Phone}</a>
                    </Link>
                  </div>
                </div>
              </li>
            )}
            {Email && (
              <li className="header-contacts__item">
                <div className="header-contacts__item-wrapper">
                  {EmailIcon && (
                    <Link href={`mailto:${Email}`}>
                      <a className="header-contacts__icon-link">
                        <IcoMoonIcon icon={EnumsIcon.Chat} className="header-contacts__icon" />
                      </a>
                    </Link>
                  )}
                  <div className="header-contacts__item-content">
                    {EmailText && <Typography text={EmailText} className="header-contacts__text font-bold" />}
                    <Link href={`mailto:${Email}`}>
                      <a className="header-contacts__link">{Email}</a>
                    </Link>
                  </div>
                </div>
              </li>
            )}
          </ul>
        ) : null}
      </Container>
    </header>
  )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../Navigation'

import { usePage } from '@/context/page-context'
import { IImageUi } from '@/types/common'
import { INavigationLink } from '../Navigation/Navigation.type'

function Header() {
  const { header } = usePage()
  const { Logo, pages } = header.data.attributes
  let logo: IImageUi | null = null
  let navigation: INavigationLink[] | [] = []

  if (Logo.Media.data) {
    logo = {
      src: Logo.Media.data.attributes.url,
      alt: Logo.Alt,
      width: Logo.Media.data.attributes.width,
      height: Logo.Media.data.attributes.height,
    }
  }

  if (pages.data) {
    navigation = pages.data.map((item) => {
      return {
        id: item.id,
        href: item.attributes.Slug,
        text: item.attributes.Heading,
      }
    })
  }

  return (
    <div className="header">
      <div className="header__container container flex items-center">
        {logo ? (
          <Link href="/" className="header__image mr-40 lg:mr-60">
            <Image {...logo} />
          </Link>
        ) : null}
        {navigation ? <Navigation items={navigation} /> : null}
      </div>
    </div>
  )
}

export default Header

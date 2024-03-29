import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'
import Container from './Container'

import { IBlockHero } from '../../../interfaces/blocks'

function BlockHero({ Image, Title, Text, Overlay = false }: IBlockHero) {
  return (
    <section className="block-hero">
      {Overlay && <div className="image-absolute-overlay"></div>}
      {Image && Image.Url ? (
        <ImageComponent Url={Image.Url} Alt={Image.Alt} className="block-hero__bg-image image-absolute-fill" />
      ) : null}
      <Container className="block-hero__container">
        <div className="block-hero__content">
          {Title ? <Typography level="h1" text={Title} className="block-hero__title text-uppercase" /> : null}
          {Text ? <Typography text={Text} className="block-hero__text text-lg text-color-secondary" /> : null}
        </div>
      </Container>
    </section>
  )
}

export default BlockHero

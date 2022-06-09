import React from 'react'
import Container from '../Container'
import Navigation from './Navigation'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import ImageComponent from '../Image'

import { IHeader } from '../../../../interfaces/pages'

export default function Header({ Image, Menu }: IHeader) {
  return (
    <header className="header">
      <Container className="header__container">
        <Row alignItems="center">
          <Col base={4} md={3}>
            {Image && Image.Url ? <ImageComponent Url={Image.Url} Alt={Image.Alt} className="header__logo" /> : null}
          </Col>
          <Col sm={6} md={9}>
            {Menu && <Navigation className="header-navigation" Menu={Menu} />}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

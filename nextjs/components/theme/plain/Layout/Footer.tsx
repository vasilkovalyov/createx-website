import React from 'react'
import Container from '../Container'
import Navigation from './Navigation'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import ImageComponent from '../Image'
import Typography from '../Typography'

import { HeadingLevel } from '../../../../enums/common'
import { IFooter } from '../../../../interfaces/pages'

export default function Footer({ Image, Text, Menu }: IFooter) {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <Row alignItems="center">
          <Col base={4} md={3}>
            {Image && Image.Url ? <ImageComponent Url={Image.Url} Alt={Image.Alt} className="header__logo" /> : null}
            {Text && <Typography text={Text} className="footer__text" />}
          </Col>
          <Col sm={6} md={9}>
            {Menu && Menu.length ? (
              <>
                {Menu.map((item) => (
                  <div key={item.id}>
                    {item.Name && (
                      <Typography text={item.Name} level={HeadingLevel.H6} className="footer__navigation-title" />
                    )}
                    <Navigation className="header-navigation" Menu={item} />
                  </div>
                ))}
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import React from 'react'
import Container from '../Container'
import Navigation from './Navigation'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import ImageComponent from '../Image'
import Typography from '../Typography'
import SocialListComponent from '../SocialList'
import ContactInformationComponent from '../ContactInformation'
import SimpleSubscribeForm from '../Form/SimpleSubscribeForm'

import { IFooter } from '../../../../interfaces/pages'

export default function Footer({ Image, Text, Menu, ContactInformation, SocialList, SubscribeForm }: IFooter) {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <Row justify="space-between">
          <Col base={12} md={6}>
            <Row className="footer__top-left-content">
              <Col base={12} lg={4}>
                {Image && Image.Url && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="footer__logo" />}
              </Col>
              <Col base={12} lg={6}>
                {SocialList && SocialList.Items.length && (
                  <SocialListComponent Items={SocialList.Items} className="footer__social-list" />
                )}
              </Col>
              <Col base={12} lg={10}>
                {Text && <Typography text={Text} className="footer__text text-xs" />}
              </Col>
            </Row>
          </Col>
          <Col base={12} md={6} xl={5}>
            {SubscribeForm ? <SimpleSubscribeForm /> : null}
          </Col>
          <Col base={12} md={6} xl={4} className="footer__contact-col">
            {ContactInformation.Title && (
              <Typography level="h6" text={ContactInformation.Title} className="footer__contact-title text-sm" />
            )}
            <ContactInformationComponent {...ContactInformation} Theme="light" />
          </Col>
          <Col base={12} md={6} xl={8}>
            {Menu && Menu.length ? (
              <Row className="footer__navigation-row">
                {Menu.map((item) => (
                  <Col key={item.id} sm={6} md={6} lg={4}>
                    {item.Name && (
                      <Typography text={item.Name} level="h6" className="footer__navigation-title text-sm" />
                    )}
                    <Navigation className="footer-navigation" Menu={item} />
                  </Col>
                ))}
              </Row>
            ) : null}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

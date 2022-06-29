import React from 'react'

import LinkComponent from 'next/link'
import ImageComponent from '../plain/Image'
import Typography from '../plain/Typography'
import Row from '../plain/Grid/Row'
import Col from '../plain/Grid/Col'
import Button from './Button'

import { IService } from '../../../interfaces/common'

export default function Service({ type, reverse, Image, Logo, Logo2, Title, Text, Link }: IService) {
  if (type === 'card') {
    return (
      <div className="service-card shadow-wrapper">
        {Image && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="service-card__image" />}
        <div className="service-card__overlay overlay overlay--light"></div>
        <div className="service-card__body">
          {Logo || Logo2 ? (
            <div className="service-card__logo-wrapper">
              {Logo && (
                <ImageComponent
                  Url={Logo.Url}
                  Alt={Logo.Alt}
                  className="service-card__logo service-card__logo-primary"
                />
              )}
              {Logo2 && (
                <ImageComponent
                  Url={Logo2.Url}
                  Alt={Logo2.Alt}
                  className="service-card__logo service-card__logo-secondary"
                />
              )}
            </div>
          ) : null}
          <Typography level="h6" text={Title} className="service-card__title text-align--center" />
        </div>
        {Link && (
          <LinkComponent href={`/en/${Link.url}`}>
            <a className="service-card__link" target={Link.target}></a>
          </LinkComponent>
        )}
      </div>
    )
  }
  if (type === 'post') {
    return (
      <div className={`service-post ${reverse ? 'service-post--reverse' : ''}`}>
        <Row justify="space-between" alignItems="center" className="service-post__row">
          <Col base={12} md={6}>
            <ImageComponent Url={Image.Url} Alt={Image.Alt} className="service-post__image" />
          </Col>
          <Col base={12} md={6}>
            <div className="service-post__body">
              <Typography level="h3" text={Title} className="service-post__title" />
              {Text && <Typography text={Text} className="service-post__text" />}
              {Link && <Button url={Link.url} name={Link.text} className="service-post__btn" type="outline" />}
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  return null
}

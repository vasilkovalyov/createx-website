import React from 'react'

import Container from './Container'
import Typography from './Typography'
import Row from './Grid/Row'
import Col from './Grid/Col'
import ImageComponent from './Image'
import Accordion from './Accordion'
import BlockHeading from './BlockHeading'

import { IBlockServiceDescription } from '../../../interfaces/blocks'

export default function BlockServiceDescription({ Title, Image, Items }: IBlockServiceDescription) {
  return (
    <section className="block-service-description">
      <Container className="block-service-description__container">
        <Row>
          {Image && Image.Url && (
            <Col base={12} md={6} xl={7} className="block-service-description__col-image">
              <ImageComponent Url={Image.Url} Alt={Image.Alt} className="block-service-description__image" />
            </Col>
          )}
          <Col base={12} md={6} xl={4}>
            {Title && <BlockHeading Title={Title} className="block-service-description__title" />}
            {Items && Items.length ? (
              <>
                {Items.map((item, index) => (
                  <Accordion key={item.id} {...item} isOpen={index === 0} />
                ))}
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

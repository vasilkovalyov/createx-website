import React from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import ImageComponent from './Image'
import Row from './Grid/Row'
import Col from './Grid/Col'
import ReactMarkdown from 'react-markdown'

import { IBlockConstructiveDecisions } from '../../../interfaces/blocks'

export default function BlockConstructiveDecisions({
  RichText,
  Image,
  Title,
  Reverse,
  Overlay,
}: IBlockConstructiveDecisions) {
  return (
    <section className={`constructive-decisions ${Reverse ? 'constructive-decisions--reverse' : ''}`}>
      <div className="constructive-decisions__inner">
        {Overlay && <div className="constructive-decisions__overlay"></div>}
        <Container className="constructive-decisions__container">
          <div className="block-benefits__items">
            <Row justify="space-between">
              {Image && Image.Url ? (
                <Col base={12} md={4} lg={6} xl={5}>
                  <ImageComponent Url={Image.Url} Alt={Image.Alt} className="constructive-decisions__image" />
                </Col>
              ) : (
                ''
              )}
              <Col base={12} md={8} lg={6} xl={6}>
                <BlockHeading Title={Title} />
                <div className="constructive-decisions__content">
                  {RichText && <ReactMarkdown>{RichText}</ReactMarkdown>}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  )
}

import React from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import Service from './Service'
import WorkCategories from './WorkCategories'
import BlockHeading from './BlockHeading'

import { IBlockPreviewServices } from '../../../interfaces/blocks'

export default function BlockPreviewServices({ Title, Text, Items }: IBlockPreviewServices) {
  return (
    <section className="block-preview-services">
      <Container className="block-preview-services__container">
        <BlockHeading Title={Title} Text={Text} aligned="center" />
        <div className="preview-services-list">
          <Row>
            {Items && Items.length ? (
              <>
                {Items.map((item) => (
                  <Col key={item.id} base={12} sm={6} lg={3}>
                    <Service {...item} type="card" />
                  </Col>
                ))}
              </>
            ) : null}
          </Row>
        </div>
      </Container>
    </section>
  )
}

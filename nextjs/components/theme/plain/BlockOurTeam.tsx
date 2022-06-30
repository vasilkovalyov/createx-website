import React from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'
import PersonCard from './PersonCard'

import { IBlockOurTeam } from '../../../interfaces/blocks'

export default function BlockOurTeam({ Title, Text, Items }: IBlockOurTeam) {
  return (
    <section className="block-our-team">
      <Container className="block-our-team__container">
        <BlockHeading Title={Title} Text={Text} aligned="center" />
        {Items && Items.length ? (
          <Row>
            {Items.map((post) => (
              <Col key={post.id} base={6} md={3}>
                <PersonCard {...post} />
              </Col>
            ))}
          </Row>
        ) : null}
      </Container>
    </section>
  )
}

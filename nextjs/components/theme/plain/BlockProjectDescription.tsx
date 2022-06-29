import React from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import ProjectDescription from './ProjectDescription'

import { IBlockProjectDescription } from '../../../interfaces/blocks'
import BlockHeading from './BlockHeading'
import ReactMarkdown from 'react-markdown'

export default function BlockProjectDescription({ Title, RichText, Items }: IBlockProjectDescription) {
  return (
    <section className="block-project-description">
      <Container className="block-project-description__container">
        <Row justify="space-between">
          <Col base={12} md={5} lg={6} className="block-project-description__content-col">
            {Title && <BlockHeading Title={Title} headingLevel="h2" className="block-project-description__title" />}
            <div className="block-project-description__content">
              {RichText && <ReactMarkdown>{RichText}</ReactMarkdown>}
            </div>
          </Col>
          {Items && Items.length ? (
            <Col base={12} md={7} lg={5}>
              <ProjectDescription Items={Items} />
            </Col>
          ) : null}
        </Row>
      </Container>
    </section>
  )
}

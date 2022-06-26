import React from 'react'

import Container from './Container'
import Typography from './Typography'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockProjectSteps } from '../../../interfaces/blocks'

export default function BlockProjectSteps({ Title, Items }: IBlockProjectSteps) {
  return (
    <section className="block-project-steps">
      <Container className="block-project-steps__container">
        {Title && <Typography level="h2" text={Title} className="block-project-steps__title" />}
        {Items && Items.length ? (
          <Row className="project-steps">
            {Items.map((item, index) => (
              <Col key={item.id} className="project-steps__col" base={12} md={3}>
                <div className="project-step">
                  <div className="project-step__number h2">
                    {item.ShowNumber ? (
                      <>
                        <div className="project-step__number-circle"></div>0{index + 1}
                      </>
                    ) : null}
                  </div>
                  <div className="project-step__body">
                    <Typography level="h6" text={item.ProjectStepTitle} className="project-step__title" />
                    {item.Text && (
                      <Typography text={item.Text} className="project-step__text text-color-secondary text-sm" />
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : null}
      </Container>
    </section>
  )
}

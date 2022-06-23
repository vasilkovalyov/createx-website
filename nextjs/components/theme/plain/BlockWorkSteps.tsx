import React from 'react'

import Container from './Container'
import Typography from './Typography'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockWorkSteps } from '../../../interfaces/blocks'

export default function BlockWorkSteps({ Title, Items }: IBlockWorkSteps) {
  return (
    <section className="block-work-steps">
      <Container className="block-work-steps__container">
        {Title && <Typography level="h2" text={Title} className="block-work-steps__heading" />}
        {Items && Items.length ? (
          <Row className="work-steps">
            {Items.map((item, index) => (
              <Col key={item.id} className="work-steps__col" base={12} md={3}>
                <div className="work-step">
                  <div className="work-step__number h2">
                    {item.ShowNumber ? (
                      <>
                        <div className="work-step__number-circle"></div>0{index + 1}
                      </>
                    ) : null}
                  </div>
                  <div className="work-step__body">
                    <Typography level="h6" text={item.WorkStepTitle} className="work-step__heading" />
                    {item.Text && (
                      <Typography text={item.Text} className="work-step__text text-color-secondary text-sm" />
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

import React from 'react'

import Container from './Container'
import Typography from './Typography'
import ContactInformation from './ContactInformation'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'
import SocialList from './SocialList'

import { IBlockOurOffices } from '../../../interfaces/blocks'

export default function BlockOurOffices({ Title, Text, Items, Title2, Socials }: IBlockOurOffices) {
  return (
    <section className="block-our-offices bg-color-grey-extra-light">
      <Container className="block-our-offices__container">
        <BlockHeading Title={Title} Text={Text} aligned="center" />
        {Items && Items.length ? (
          <Row>
            {Items.map((item, index) => (
              <Col base={12} md={4} key={index} className="block-our-offices__col">
                <div className="block-our-offices__contact-info">
                  <Typography className="block-our-offices__col-title" text={item.Title} level="h4" />
                  {item.Address && <Typography className="block-our-offices__col-address" text={item.Address} />}
                  <ContactInformation Email={item.Email} Phone={item.Phone} Schedule={item.Schedule} />
                </div>
              </Col>
            ))}
          </Row>
        ) : null}
        <BlockHeading Title={Title2} aligned="center" className="block-our-offices__block-heading-2" />
        {Socials ? (
          <Row justify="center">
            <Col md={6} className="flex flex-justify-center">
              {<SocialList Items={Socials} />}
            </Col>
          </Row>
        ) : null}
      </Container>
    </section>
  )
}

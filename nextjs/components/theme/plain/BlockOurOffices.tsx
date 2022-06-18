import React from 'react'

import Container from './Container'
import Typography from './Typography'
import ContactInformation from './ContactInformation'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockOurOffices } from '../../../interfaces/blocks'


export default function BlockOurOffices({ BlockType, Title, Text, Items }: IBlockOurOffices) {
  return (
    <section className="block-our-offices bg-color-grey-extra-light">
        <Container className="block-our-offices__container">
            <BlockHeading Title={Title} Text={Text} aligned="center" />
            {
                Items && Items.length ? (
                    <Row>
                        {
                            Items.map((item, index) => (
                                <Col base={12} md={4} key={index}>
                                    <div className="block-our-offices__contact-info">
                                        <Typography className='block-our-offices__col-title' text={item.Title} level='h4' />
                                        { item.Address && <Typography className='block-our-offices__col-address' text={item.Address} /> }
                                        <ContactInformation Email={item.Email} Phone={item.Phone} Schedule={item.Schedule}  />
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                ) : null
            }
            
        </Container>
    </section>
  )
}

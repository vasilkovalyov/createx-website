import React from 'react'

import Typography from './Typography'
import Carousel from './Carousel'
import Container from './Container'
import ClientTestimonial from './ClientTestimonial'
import ImageComponent from './Image'

import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockOurClients } from '../../../interfaces/blocks'

export default function BlockOurClients({ BlockType, Title, Image, Items }: IBlockOurClients) {
  return (
    <section className="block-our-clients">
        <div className="block-our-clients__inner">
            <div className="block-our-clients__overlay"></div>
            <Container className="block-our-clients__container">
                <Row className="block-our-clients__row" justify="space-between">
                    <Col base={12} sm={12} lg={6} className="block-our-clients__col-content">
                        <Typography level="h2" text={Title} className="block-our-clients__title"  />
                        
                        <Carousel slides={Items.map((item, index) => (
                            <div key={index} className="block-our-clients__slide">
                                <ClientTestimonial {...item} />
                            </div>
                        ))} className="block-our-clients__carousel" />
                    </Col>
                    <Col base={12} sm={12} lg={5} className="block-our-clients__col-image">
                        <ImageComponent Url={Image.Url} Alt={Image.Alt} className="block-our-clients__image" />
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}

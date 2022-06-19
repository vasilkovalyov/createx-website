import React from 'react'

import Carousel from './Carousel'
import Container from './Container'
import ClientTestimonial from './ClientTestimonial'
import ImageComponent from './Image'
import BlockHeading from './BlockHeading'

import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockOurClientsTestimonials } from '../../../interfaces/blocks'

export default function BlockOurClientsTestimonials({ Title, Image, Items }: IBlockOurClientsTestimonials) {
  return (
    <section className="block-our-clients">
        <div className="block-our-clients__inner">
            <div className="block-our-clients__overlay"></div>
            <Container className="block-our-clients__container">
                <Row className="block-our-clients__row" justify="space-between">
                    <Col base={12} sm={12} lg={6} className="block-our-clients__col-content">
                        <BlockHeading Title={Title} />
                        <Carousel slides={Items.map((item, index) => (
                            <div key={index} className="block-our-clients__slide">
                                <ClientTestimonial {...item} />
                            </div>
                        ))} className="block-our-clients__carousel" />
                    </Col>
                    <Col base={12} sm={12} lg={5} className="block-our-clients__col-image">
                        { Image && Image.Url &&<ImageComponent Url={Image.Url} Alt={Image.Alt} className="block-our-clients__image" /> }
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}

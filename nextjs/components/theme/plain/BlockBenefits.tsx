import React from 'react'
import cn from 'classnames'

import Container from './Container'
import BlockHeading from './BlockHeading'
import Benefit from './Benefit'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { IBlockBenefits } from '../../../interfaces/blocks'

function BlockHero({ Items, Theme = 'light', Title, Text }: IBlockBenefits) {
    const themeColor = cn({
		'block-benefits--light': Theme === 'light',
		'block-benefits--dark': Theme === 'dark',
		'block-benefits--grey': Theme === 'grey',
	})
	return (
		<section className={`block-benefits ${themeColor ? themeColor : ''}`}>
			<Container className="block-hero__container">
				<BlockHeading Title={Title} Text={Text} headingLevel="h2" aligned="center" />
				<div className="block-benefits__items">
					<Row>
						{
							Items && Items.length && Items.map((item) => (
								<Col key={item.id} base={12} md={4}>
										<Benefit {...item} />
								</Col>
							))
						}
					</Row>
				</div>
			</Container>
		</section>
	)
}

export default BlockHero
